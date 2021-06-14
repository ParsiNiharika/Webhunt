import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq9Component } from './wq9.component';

describe('Wq9Component', () => {
  let component: Wq9Component;
  let fixture: ComponentFixture<Wq9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
