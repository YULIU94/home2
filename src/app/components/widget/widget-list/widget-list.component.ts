import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import { WidgetService } from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgets: Widget[];
  // widgets = [];
  widget: Widget;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {}


  // receiving the emitted event
  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    console.log(indexes.startIndex);
    console.log(indexes.endIndex);
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data) => console.log(data)
      );
    console.log(this.widgets);
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );

    this.widgetService.findAllwidgetsForPage(this.pageId)
      .subscribe((widgets: Widget[]) => {
        this.widgets = widgets;
        console.log(this.widgets);
      });
  }
}
