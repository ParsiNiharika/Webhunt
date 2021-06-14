import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq6Component } from './wq6.component';

describe('Wq6Component', () => {
  let component: Wq6Component;
  let fixture: ComponentFixture<Wq6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
