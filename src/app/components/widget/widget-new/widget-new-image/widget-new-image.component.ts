import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

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


  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}


  createImage(name, text, url, width) {
    const widget = {'_id': '', 'type': 2, 'size': '', 'text': text, 'src': url, pageId: this.pageId};
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((pages) => {
        this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
  }
}
