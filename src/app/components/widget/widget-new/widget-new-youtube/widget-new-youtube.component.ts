import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-new-youtube',
  templateUrl: './widget-new-youtube.component.html',
  styleUrls: ['./widget-new-youtube.component.css']
})
export class WidgetNewYoutubeComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;


  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  createYoutube(name, text, url, width) {
    const widget = {'_id': '', 'type': 2, 'size': '', 'text': text, 'src': url, pageId: this.pageId};
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((pages) => {
        this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
  }
}
