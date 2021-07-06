/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiCardTitleComponent } from './UiCardTitle.component';

describe('UiCardTitleComponent', () => {
  let component: UiCardTitleComponent;
  let fixture: ComponentFixture<UiCardTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCardTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
