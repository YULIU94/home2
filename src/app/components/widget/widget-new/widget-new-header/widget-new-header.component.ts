import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-new-header',
  templateUrl: './widget-new-header.component.html',
  styleUrls: ['./widget-new-header.component.css']
})

export class WidgetNewHeaderComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  text: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {}

  createHeader(name, text, size) {
    if (name.length === 0) {
      alert('miss header name');
      return;
    }
    const widget = {'_id': '', 'type': 1, 'size': size, 'text': this.text, 'src': '', pageId: this.pageId};
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((pages) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  onContentChanged({ quill, html, text }) {
    this.text = text;
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
  }
}
