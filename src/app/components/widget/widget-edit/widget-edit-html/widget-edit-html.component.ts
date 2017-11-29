import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-edit-html',
  templateUrl: './widget-edit-html.component.html',
  styleUrls: ['./widget-edit-html.component.css']
})
export class WidgetEditHtmlComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget;
  text: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {}


  saveWidget(name, text) {
    if (name.length === 0) {
      alert('miss widget name');
      return;
    }
    const newWidget = {'widgetId': this.widgetId, 'name': name, 'text': this.text, 'size': ''};
    this.widgetService.updateWidgetHeader(this.widgetId, newWidget)
      .subscribe((widget) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  onContentChanged({ quill, html, text }) {
    this.text = text;
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
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
