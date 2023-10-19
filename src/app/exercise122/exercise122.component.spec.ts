import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise122Component } from './exercise122.component';

describe('Exercise122Component', () => {
  let component: Exercise122Component;
  let fixture: ComponentFixture<Exercise122Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise122Component]
    });
    fixture = TestBed.createComponent(Exercise122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
