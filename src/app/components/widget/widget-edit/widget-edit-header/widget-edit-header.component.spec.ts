import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditHeaderComponent } from './widget-edit-header.component';

describe('WidgetEditHeaderComponent', () => {
  let component: WidgetEditHeaderComponent;
  let fixture: ComponentFixture<WidgetEditHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
