import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {WEBSITES} from './website.mock.client';
import {Website} from '../models/website.model.client';

@Injectable()
export class WebsiteService {


  constructor(private http: Http) {
  }

  websites = WEBSITES;

  createWebsite(userId, website) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsitesForUser(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllWebsites() {
    return this.http.get('http://localhost:3100/api/website')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWebsiteById(userId, websiteId) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(userId, newWebsite, websiteId) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.put(url, newWebsite)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteWebsite(userId: String, websiteId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }


}
