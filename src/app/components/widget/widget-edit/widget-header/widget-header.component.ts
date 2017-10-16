import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  userId: String;


  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private router: Router) {}

  toWebsiteList( ) {
    this.router.navigate(['profile', this.userId, 'website']);
  }

  toProfile() {
    this.router.navigate(['profile', this.userId]);
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
  }

}
