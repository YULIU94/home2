import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditYoutubeComponent } from './widget-edit-youtube.component';

describe('WidgetEditYoutubeComponent', () => {
  let component: WidgetEditYoutubeComponent;
  let fixture: ComponentFixture<WidgetEditYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
