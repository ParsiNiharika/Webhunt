import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq5Component } from './wq5.component';

describe('Wq5Component', () => {
  let component: Wq5Component;
  let fixture: ComponentFixture<Wq5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
