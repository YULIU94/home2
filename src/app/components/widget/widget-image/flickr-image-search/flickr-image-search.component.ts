import {Component, Input, OnInit} from '@angular/core';
import {FlickrService} from '../../../../services/flickr.service.client';
import {Photo} from '../../../../models/photo.model.client';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements FlickrImageSearchComponent {
  @Input()
  searchText: String;
  photos = {};
  websiteId: String;
  pageId: String;

  constructor(private flickrService: FlickrService,
              private widgetService: WidgetService) {
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


  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = {
      websiteId: this.websiteId,
      pageId: this.pageId,
      url: url
    };
  }
}
