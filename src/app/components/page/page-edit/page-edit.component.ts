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
  websiteId: String;
  pages = [{}];
  pageId: String;

  constructor(private _pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  updatePage(pagename, pagetitle) {
    const page = { '_id': this.pageId, 'name': pagename, 'websiteId': this.websiteId, 'description': ''};
    this._pageService.updatePage(this.pageId, page)
      .subscribe((newpage) => {
        this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page']);
      });
  }

  deletePage() {
    this._pageService.deletePage(this.pageId)
      .subscribe((newpage) => {
        this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page']);
      });
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
    this._pageService.findAllPagesForWebsite(this.websiteId)
      .subscribe((pages) => {
        this.pages = pages;
        console.log(pages);
      });
  }
}
