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
      console.log(this.pages);
    }

   findPageByWebsiteId(websiteId) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId === websiteId) {
        return this.pages[i];
      }
    }
  }

  findPagesByWebsiteId(websiteId) {
    const pages = [{}];
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId === websiteId) {
        pages.push(this.pages[i]);

      }
    }
    pages.splice(0, 1);
    return pages;
  }

   findPageById(pageId) {
     for (let i = 0; i < this.pages.length; i++) {
       if (this.pages[i]._id === pageId) {
         return this.pages[i];
       }
     }
    }

   updatePage(pageId, page) {
    console.log(pageId);
     for (let i = 0; i < this.pages.length; i++) {
       if (this.pages[i]._id === pageId) {
         console.log(this.pages[i]);
         this.pages[i] = page;
       }
     }
  }

   deletePage(pageId) {
     for (let i = 0; i < this.pages.length; i++) {
       if (this.pages[i]._id === pageId) {
         this.pages.splice(i, 1);
       }
     }
    }
}
