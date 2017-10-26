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
  websites = [{}];
  websiteId: String;
  website: Website;
  websiteName: String

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private router: Router) {}



  updateWebsite(name: String, description: String) {
    const newWebsite = new Website(this.website._id, name, this.website.developerId, description);
    this._websiteService.updateWebsite(this.userId, newWebsite)
      .subscribe((websites) => {
        this.websites = websites;
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
        }
      );
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
    this._websiteService.findWebsiteById(this.userId, this.websiteId)
      .subscribe((website) => {
        this.website = website;
      });
  }
}


// findPage(website) {
//   console.log(this.websites);
//   console.log(website['_id']);
//   if (website) {
//     this.router.navigate(['profile', this.userId, 'website', website['_id'], 'page']);
//   }
// }
//
// findEditWebsite(website) {
//   if (website) {
//     this.router.navigate(['profile', this.userId, 'website', website['_id'] ]);
//   }
// }
