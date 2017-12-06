import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-edit-image',
  templateUrl: './widget-edit-image.component.html',
  styleUrls: ['./widget-edit-image.component.css']
})
export class WidgetEditImageComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;


  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {}

  saveWidget(name, text, url) {
    if (name.length === 0) {
      alert('miss widget name');
      return;
    }
    const newWidget = {'widgetId': this.widgetId, 'name': name, 'text': text, 'url': url};
    this.widgetService.updateWidgetImage(this.widgetId, newWidget)
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
  }
}
