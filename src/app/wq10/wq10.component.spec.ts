import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq10Component } from './wq10.component';

describe('Wq10Component', () => {
  let component: Wq10Component;
  let fixture: ComponentFixture<Wq10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
