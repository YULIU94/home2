import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites = [{}];

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute,
              private router: Router) {}

  findPage(website) {
    alert(website.websiteId);
    if (website) {
      this.router.navigate(['profile', this.userId, 'website', website.websiteId, 'page']);
    }
  }

  findEditWebsite(website) {
    if (website) {
      this.router.navigate(['profile', this.userId, 'website', website.websiteId ]);
    }
  }

  toProfile() {
    this.router.navigate(['profile', this.userId]);
  }

  toNewWebsite() {
    this.router.navigate(['profile', this.userId, 'website', 'new']);
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
  }

}
