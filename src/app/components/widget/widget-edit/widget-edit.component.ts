import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

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
