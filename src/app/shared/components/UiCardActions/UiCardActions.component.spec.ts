/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiCardActionsComponent } from './UiCardActions.component';

describe('UiCardActionsComponent', () => {
  let component: UiCardActionsComponent;
  let fixture: ComponentFixture<UiCardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
