import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-edit-youtube',
  templateUrl: './widget-edit-youtube.component.html',
  styleUrls: ['./widget-edit-youtube.component.css']
})
export class WidgetEditYoutubeComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;


  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {}


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
