import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Update2Component } from './update2.component';

describe('Update2Component', () => {
  let component: Update2Component;
  let fixture: ComponentFixture<Update2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Update2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Update2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
