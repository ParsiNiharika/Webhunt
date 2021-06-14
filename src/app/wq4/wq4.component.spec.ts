import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq4Component } from './wq4.component';

describe('Wq4Component', () => {
  let component: Wq4Component;
  let fixture: ComponentFixture<Wq4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
