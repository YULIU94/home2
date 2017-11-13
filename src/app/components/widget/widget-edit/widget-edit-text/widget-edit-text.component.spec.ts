import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditTextComponent } from './widget-edit-text.component';

describe('WidgetEditTextComponent', () => {
  let component: WidgetEditTextComponent;
  let fixture: ComponentFixture<WidgetEditTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
