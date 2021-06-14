import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq2Component } from './wq2.component';

describe('Wq2Component', () => {
  let component: Wq2Component;
  let fixture: ComponentFixture<Wq2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
