import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq1Component } from './wq1.component';

describe('Wq1Component', () => {
  let component: Wq1Component;
  let fixture: ComponentFixture<Wq1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
