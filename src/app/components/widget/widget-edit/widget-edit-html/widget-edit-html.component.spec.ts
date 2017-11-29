import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditHtmlComponent } from './widget-edit-html.component';

describe('WidgetEditHtmlComponent', () => {
  let component: WidgetEditHtmlComponent;
  let fixture: ComponentFixture<WidgetEditHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
