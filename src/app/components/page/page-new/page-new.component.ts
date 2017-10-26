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
  websiteId: String;
  pages = [{}];

  constructor(private _websiteService: WebsiteService,
              private _pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  createPage(pagename, pagetitle) {
    const page = { '_id': '321', 'name': pagename, 'websiteId': this.websiteId, 'description': 'new' };
    this._pageService.createPage(this.websiteId, page)
      .subscribe((pages) => {
        this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['wid'];
        }
      );
    this._pageService.findAllPagesForWebsite(this.websiteId)
      .subscribe((pages) => {
        this.pages = pages;
        console.log(pages);
      });
  }
}
