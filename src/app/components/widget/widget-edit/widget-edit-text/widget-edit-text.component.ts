import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit-text',
  templateUrl: './widget-edit-text.component.html',
  styleUrls: ['./widget-edit-text.component.css']
})
export class WidgetEditTextComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}


  saveWidget(name, rows, text, placeholder, formatted) {
    const newWidget = {'name': name, 'widgetId': this.widgetId, 'type': this.widget.type, 'rows': rows, 'text': text,
                       'placeholder': placeholder, 'formatted': formatted};
    this.widgetService.updateWidgetTextInput(this.widgetId, newWidget)
      .subscribe((widget) => {
        this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widget) => {
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
          this.widgetId = params['wgid'];
        }
      );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

}
