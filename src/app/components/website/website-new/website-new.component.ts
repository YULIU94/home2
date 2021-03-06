import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: String;
  websites = [{}];
  websiteDescription: String;

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService, private router: Router) {}

  createWebsite(websitename, websitedescription) {
    if (websitename.length === 0) {
      alert('miss website name');
      return;
    }
    const website: Website = new Website('', websitename, this.userId, this.websiteDescription);
    this._websiteService.createWebsite(this.userId, website)
      .subscribe((websites) => {
        // this.websites = websites;
        this.router.navigate(['profile', 'website']);
      });
  }

  findPage(website) {
    console.log(this.websites);
    console.log(website['_id']);
    if (website) {
      this.router.navigate(['profile', this.userId, 'website', website['_id'], 'page']);
    }
  }

  findEditWebsite(website) {
    if (website) {
      this.router.navigate(['profile', this.userId, 'website', website['_id'] ]);
    }
  }

  saveNewWebsite(websitename, websitedescription) {
    const website = {'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' };
    website['_id'] = Math.random().toString();
    website['name'] = websitename;
    website['developerId'] = this.userId.toString();
    website['description'] = websitedescription;
    console.log(website);
    this._websiteService.createWebsite(website['_id'], website);
  }


  ngOnInit() {
    // this.activatedRoute.params
    //   .subscribe(
    //     (params: any) => {
    //       this.userId = params['userId'];
    //     }
    //   );
    this.userId = this.sharedService.user['_id'];
  }

}
