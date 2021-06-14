import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq13Component } from './wq13.component';

describe('Wq13Component', () => {
  let component: Wq13Component;
  let fixture: ComponentFixture<Wq13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
