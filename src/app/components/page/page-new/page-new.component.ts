import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  pages = [{}];

  constructor(private sharedService: SharedService,
              private _pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  createPage(pagename, pagetitle) {
    if (pagename.length === 0) {
      alert('miss page name');
      return;
    }
    const page = {'name': pagename, 'websiteId': this.websiteId, 'description': 'new' , 'title': pagetitle};
    this._pageService.createPage(this.websiteId, page)
      .subscribe((pages) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page']);
      });
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
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
