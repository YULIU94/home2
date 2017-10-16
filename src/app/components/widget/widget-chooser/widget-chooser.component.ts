import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;


  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private router: Router) {}

  toWebsiteList( ) {
    this.router.navigate(['profile', this.userId, 'website']);
  }

  toWidgetList() {
    console.log(this.websiteId);
    console.log(this.websiteId);
    console.log(this.pageId);
    this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page', this.pageId]);
  }

  toProfile() {
    this.router.navigate(['profile', this.userId]);
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
        }
      );
  }

}
