import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: String;
  websites = [{}];
  websiteId: String;
  pages = [{}];

  constructor(private _websiteService: WebsiteService,
              private _pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['wid'];
        }
      );
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
    this.pages = this._pageService.findPagesByWebsiteId(this.websiteId);
  }
}
