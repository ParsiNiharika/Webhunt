import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq14Component } from './wq14.component';

describe('Wq14Component', () => {
  let component: Wq14Component;
  let fixture: ComponentFixture<Wq14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
