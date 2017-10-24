import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {WEBSITES} from './website.mock.client';

@Injectable()
export class WebsiteService {


  constructor(private http: Http) {
  }

  websites = WEBSITES;

  findAllWebsites() {
    return this.http.get('http://localhost:3100/api/website')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  createWebsite(userId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === userId ) {
        console.log('id exists');
        return;
      }else {
        this.websites.push(website);
        return;
      }
    }
  }

  findWebsiteByUser(userId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId ) {
        return this.websites[x];
      }
    }
  }

  findWebsitesByUser(userId) {
    const sites = [{}];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId ) {
        sites.push(this.websites[x]);
      }
    }
    sites.splice(0, 1);
    return sites;
  }

  findWebsiteById(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId ) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId ) {
        this.websites[x] = website;
      }
    }
  }

  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId ) {
        this.websites.splice(x, 1);
      }
    }
  }


}
