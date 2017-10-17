import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websites = [{}];
  websiteId: String;
  pages = [{}];

  constructor(private _websiteService: WebsiteService,
              private _pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  savePage(pagename, pagetitle) {
    this.pages = this._pageService.findPagesByWebsiteId(this.websiteId);
    const page = { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'new' };
    const pageId = Math.random().toString();
    page['_id'] = pageId;
    page['name'] = pagename;
    this._pageService.createPage(this.websiteId, page);
  }

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
