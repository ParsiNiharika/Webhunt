import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wq12Component } from './wq12.component';

describe('Wq12Component', () => {
  let component: Wq12Component;
  let fixture: ComponentFixture<Wq12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wq12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wq12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
