import {Component, Input, OnInit} from '@angular/core';
import {FlickrService} from '../../../../services/flickr.service.client';
import {Photo} from '../../../../models/photo.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {isUndefined} from 'util';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  @Input()
  searchText: String;
  photos = {};
  websiteId: String;
  widgetId: String;
  pageId: String;
  valid: boolean;

  constructor(private flickrService: FlickrService,
              private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
        }
      );
  }

  createPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = {
      '_id': '',
      'type': 2,
      'size': '',
      'text': '',
      'url': url,
      'pageId': this.pageId,
    };

    console.log('start');
    this.widgetService
      .createWidget(this.pageId, widget)
      .subscribe(
        (data: any) => {
          const result = data;
          if (result) {
            this.router.navigate(['/profile/' + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/'] );
            // window.location.reload();
          }else {
            console.log('error');
          }
          console.log('end');
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = {
      '_id': '',
      'type': 2,
      'size': '',
      'text': '',
      'url': url,
      'pageId': this.pageId,
    };

    this.widgetService
      .updateWidgetImage(this.widgetId, widget)
      .subscribe(
        (data: any) => {
          const result = data;
          if (result) {
            this.router.navigate(['/profile/' + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/'] );
          }else {
            console.log('error');
          }
          console.log('photos');
        }
      );
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['wgid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          console.log(this.widgetId);
          if (isUndefined(this.widgetId)) {
            this.valid = true;
          }else {
            this.valid = false;
          }
        }
      );

  }
}
