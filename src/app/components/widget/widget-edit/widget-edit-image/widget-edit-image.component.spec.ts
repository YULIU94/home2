import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditImageComponent } from './widget-edit-image.component';

describe('WidgetEditImageComponent', () => {
  let component: WidgetEditImageComponent;
  let fixture: ComponentFixture<WidgetEditImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
