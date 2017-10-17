import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: String;
  websites = [{}];
  websiteId: String;
  pages = [{}];
  pageId: String;

  constructor(private _websiteService: WebsiteService,
              private _pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  updatePage(pagename, pagetitle) {
    const page = this._pageService.findPageById(this.pageId);
    page['name'] = pagename;

    this._pageService.updatePage(this.pageId, page);
  }

  deletePage() {
    this._pageService.deletePage(this.pageId);
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
    this.pages = this._pageService.findPagesByWebsiteId(this.websiteId);
  }
}
