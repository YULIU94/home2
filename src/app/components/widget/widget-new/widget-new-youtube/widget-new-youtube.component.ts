import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service.client';

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
              private sharedService: SharedService,
              private router: Router) {}

  createYoutube(name, text, url, width) {
    if (name.length === 0) {
      alert('miss widget name');
      return;
    }
    url = url.replace('watch?v=', 'embed/');
    const widget = {'type': 3, 'size': '', 'text': text, 'url': url, pageId: this.pageId};
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((pages) => {
        this.router.navigate(['profile', 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
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
