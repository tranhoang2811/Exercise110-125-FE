import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise124Component } from './exercise124.component';

describe('Exercise124Component', () => {
  let component: Exercise124Component;
  let fixture: ComponentFixture<Exercise124Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise124Component]
    });
    fixture = TestBed.createComponent(Exercise124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
