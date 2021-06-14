import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq3Component } from './wq3.component';

describe('Wq3Component', () => {
  let component: Wq3Component;
  let fixture: ComponentFixture<Wq3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
