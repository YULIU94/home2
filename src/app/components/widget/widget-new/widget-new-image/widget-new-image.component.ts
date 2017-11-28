import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {environment} from '../../../../../environments/environment';
import {Http, Response} from '@angular/http';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-new-image',
  templateUrl: './widget-new-image.component.html',
  styleUrls: ['./widget-new-image.component.css']
})
export class WidgetNewImageComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widget: Widget;
  baseUrl: String;
  widgetId: String;


  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService,
              private http: Http) {}


  createImage(name, text, url, width) {
    if (name.length === 0) {
      alert('miss image name');
      return;
    }
    const widget = {'_id': '', 'type': 2, 'size': '', 'text': text, 'url': url, 'pageId': this.pageId};
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((pages) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  ngOnInit() {
    this.baseUrl = 'http://localhost:3100';
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = '123';
        }
      );
    this.http.get('http://localhost:3100/api/uploads')
      .map((response: Response) => {
        return response.json();
      })
      .subscribe((files) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
