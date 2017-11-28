import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  user;
  userId: String;
  websites = [];
  websiteId: String;
  website: Website;

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService, private router: Router) {}



  updateWebsite(name: String, description: String) {
    if (name.length === 0) {
      alert('miss website name');
      return;
    }
    const newWebsite = new Website(this.website._id, name, this.website.developerId, description);
    this._websiteService.updateWebsite(this.userId, newWebsite, this.websiteId)
      .subscribe((websites) => {
        this.router.navigate(['profile', 'website']);
      });
  }

  deleteWebsite() {
    this._websiteService.deleteWebsite(this.userId, this.websiteId)
      .subscribe((website) => {
        this.router.navigate(['profile', 'website']);
      });
  }

  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
    console.log(this.userId);
  }

  ngOnInit() {
    this.getUser();
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
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
