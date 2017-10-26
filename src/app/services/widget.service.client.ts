import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Widget} from '../models/widget.model.client';
import {WIDGETS} from '../models/widget.mock.client';

@Injectable()
export class WidgetService {

  widgets = [];
  constructor(private http: Http) {
  }

   createWidget(pageId, widget) {
     const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
     return this.http.post(url, widget)
       .map((response: Response) => {
         return response.json();
       });
  }

   findAllwidgetsForPage(pageId) {
     const url = 'http://localhost:3100/api/page/' + pageId + '/widget';
     return this.http.get(url)
       .map((response: Response) => {
         return response.json();
       });
  }

   findWidgetById(widgetId) {
     const url = 'http://localhost:3100/api/widget/' + widgetId;
     return this.http.get(url)
       .map((response: Response) => {
         return response.json();
       });
  }

   updateWidget(widgetId, widget) {
     const url = 'http://localhost:3100/api/widget/' + widgetId;
     return this.http.put(url, widget)
       .map((response: Response) => {
         return response.json();
       });
  }

   deleteWidget(widgetId) {
     const url = 'http://localhost:3100/api/widget/' + widgetId;
     return this.http.delete(url)
       .map((response: Response) => {
         return response.json();
       });
  }

}

