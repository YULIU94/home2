import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-edit-header',
  templateUrl: './widget-edit-header.component.html',
  styleUrls: ['./widget-edit-header.component.css']
})
export class WidgetEditHeaderComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget;
  text = String;


  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {}

  saveWidget(name, text, size) {
    if (name.length === 0) {
      alert('miss widget name');
      return;
    }
    const newWidget = {'widgetId': this.widgetId, 'type': this.widget.type, 'size': size, 'text': this.text};
    this.widgetService.updateWidgetTextInput(this.widgetId, newWidget)
      .subscribe((widget) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  onContentChanged({ quill, html, text }) {
    this.text = text;
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        }
      );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }
}
