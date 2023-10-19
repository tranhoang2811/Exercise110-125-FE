import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise120Component } from './exercise120.component';

describe('Exercise120Component', () => {
  let component: Exercise120Component;
  let fixture: ComponentFixture<Exercise120Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise120Component]
    });
    fixture = TestBed.createComponent(Exercise120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
