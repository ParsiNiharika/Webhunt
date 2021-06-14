import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq8Component } from './wq8.component';

describe('Wq8Component', () => {
  let component: Wq8Component;
  let fixture: ComponentFixture<Wq8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
