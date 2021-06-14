import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq15Component } from './wq15.component';

describe('Wq15Component', () => {
  let component: Wq15Component;
  let fixture: ComponentFixture<Wq15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
