import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise116Component } from './exercise116.component';

describe('Exercise116Component', () => {
  let component: Exercise116Component;
  let fixture: ComponentFixture<Exercise116Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise116Component]
    });
    fixture = TestBed.createComponent(Exercise116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
