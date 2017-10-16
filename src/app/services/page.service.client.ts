import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()

export class PageService {


  constructor() {}

  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ]

   createPage(websiteId, page) {
      page.websiteId = websiteId;
      this.pages.push(page);
    }

   findPageByWebsiteId(websiteId) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId = websiteId) {
        return this.pages[i];
      }
    }
  }

   findPageById(pageId) {
     for (let i = 0; i < this.pages.length; i++) {
       if (this.pages[i]._id = pageId) {
         return this.pages[i];
       }
     }
    }

   updatePage(pageId, page) {
     for (let i = 0; i < this.pages.length; i++) {
       if (this.pages[i]._id = pageId) {
         this.pages[i] = page;
       }
     }
  }

   deletePage(pageId) {
     for (let i = 0; i < this.pages.length; i++) {
       if (this.pages[i]._id = pageId) {
         this.pages.splice(i, 1);
       }
     }
    }
}
