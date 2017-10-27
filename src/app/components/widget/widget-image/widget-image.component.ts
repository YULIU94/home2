import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @Input()
  widget: Widget;
  widgetId: String;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['wgid'];
          console.log('in heading');
          console.log(params);
        }
      );
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe((widget) => {
        this.widget = widget;
      });
  }

}
