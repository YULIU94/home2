import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Widget} from '../models/widget.model.client';
import {WIDGETS} from '../models/widget.mock.client';

@Injectable()
export class WidgetService {


  constructor(private http: Http) {
  }


  widgets = [
    // {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    // {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    // {
    //   '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
    //   'url': 'http://lorempixel.com/400/200/'
    // },
    // {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    // {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'}, {
    //   '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
    //   'url': 'https://youtu.be/AM2Ivdi9c4E'
    // }
  ];

  findAllWidgets() {
    // return this.widgets;
    return this.http.get('http://localhost:3100/api/widget')
      .map((response: Response) => {
        return response.json();
      });
  }

   createWidget(pageId, widget) {
    widget.pageId = pageId;
    this.widgets.push(widget);
  }

   findWidgetsByPageId(pageId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId = pageId) {
        return this.widgets[x];
      }
    }
  }

   findWidgetById(widgetId) {
     for (let x = 0; x < this.widgets.length; x++) {
       if (this.widgets[x]._id = widgetId) {
         return this.widgets[x];
       }
     }
  }

   updateWidget(widgetId, widget) {
     for (let x = 0; x < this.widgets.length; x++) {
       if (this.widgets[x]._id = widgetId) {
         this.widgets[x] = widget;
       }
     }
  }

   deleteWidget(widgetId) {
     for (let x = 0; x < this.widgets.length; x++) {
       if (this.widgets[x]._id = widgetId) {
         this.widgets.splice(x, 1);
       }
     }
  }

}

