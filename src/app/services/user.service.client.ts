import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model.client';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';
@Injectable()

export class UserService   {
  baseUrl: String;
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private router: Router, private sharedService: SharedService) {
    this.baseUrl = environment.baseUrl;
  }


  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById
  };

  createUser(user) {
    const url = this.baseUrl + 'api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    const url = this.baseUrl + 'api/user/' + userId;
    return this.http.get(url)
      .map((response: Response ) => {
        return response.json();
      });
  }

  findUserByCredentials(username, password) {
    const url = this.baseUrl + 'api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: String) {
    const url = this.baseUrl + 'api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(user) {
    const url = this.baseUrl + 'api/user/' + user._id;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteUser(userId) {
    const url = this.baseUrl + 'api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username, password) {
    const url = this.baseUrl + 'api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login_facebook() {
    const url = this.baseUrl + 'facebook/login';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  register(username, password) {
    const url = this.baseUrl + 'api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + 'api/logout', '', this.options)
      .map((res: Response) => {
          const data = res;
          return res;
      });
  }

  loggedIn() {
    const url = this.baseUrl + 'api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

}
