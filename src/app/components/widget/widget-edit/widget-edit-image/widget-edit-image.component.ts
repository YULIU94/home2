import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

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
              private router: Router) {}


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
  }
}
