import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()

export class WebsiteService {


  constructor() {
  }

  websites = [
     { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
     { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
     { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
     { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
     { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
     { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
     { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
  ];

  createWebsite(userId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === userId ) {
        console.log('id exists');
        return;
      }
      this.websites.push(website);
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
    const sites = this.websites;
    for (let x = 0; x < this.websites.length; x++) {
      sites.pop();
    }
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId ) {
        sites.push(this.websites[x]);
      }
    }
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
