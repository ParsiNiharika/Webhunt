import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq7Component } from './wq7.component';

describe('Wq7Component', () => {
  let component: Wq7Component;
  let fixture: ComponentFixture<Wq7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
