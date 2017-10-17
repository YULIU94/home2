import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

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
