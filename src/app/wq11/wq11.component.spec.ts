import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq11Component } from './wq11.component';

describe('Wq11Component', () => {
  let component: Wq11Component;
  let fixture: ComponentFixture<Wq11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
