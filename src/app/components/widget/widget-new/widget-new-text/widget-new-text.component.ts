import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-new-text',
  templateUrl: './widget-new-text.component.html',
  styleUrls: ['./widget-new-text.component.css']
})
export class WidgetNewTextComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  text: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {}

  createTextInput(name, text, placeholder, rows, formatted) {
    if (name.length === 0) {
      alert('miss input name');
      return;
    }
    const widget = {'_id': '', 'type': 4, 'placeholder': placeholder, 'text': text, 'src': '', pageId: this.pageId,
                    'rows': rows, 'formatted': formatted};
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
