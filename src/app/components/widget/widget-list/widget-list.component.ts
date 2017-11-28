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

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {}


  // receiving the emitted event
  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data) => console.log(data)
      );
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          console.log(params);
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          console.log(params);
        }
      );

    this.widgetService.findAllwidgetsForPage(this.pageId)
      .subscribe((widgets: Widget[]) => {
        this.widgets = widgets;
      });
  }
}
