import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: String;
  websites = [];
  websiteId: String;
  website: Website;

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private router: Router) {}



  updateWebsite(name: String, description: String) {
    const newWebsite = new Website(this.website._id, name, this.website.developerId, description);
    this._websiteService.updateWebsite(this.userId, newWebsite, this.websiteId)
      .subscribe((websites) => {
        this.router.navigate(['profile', this.userId, 'website']);
      });
  }

  deleteWebsite() {
    this._websiteService.deleteWebsite(this.userId, this.websiteId)
      .subscribe((website) => {
        this.router.navigate(['profile', this.userId, 'website']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['wid'];
          console.log(this.userId);
          console.log(this.websiteId);
        }
      );
    this._websiteService.findWebsiteById(this.userId, this.websiteId)
      .subscribe((website) => {
        this.website = website;
        console.log(this.website);
      });
  }
}
