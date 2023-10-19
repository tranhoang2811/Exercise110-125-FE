import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise114Component } from './exercise114.component';

describe('Exercise114Component', () => {
  let component: Exercise114Component;
  let fixture: ComponentFixture<Exercise114Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise114Component]
    });
    fixture = TestBed.createComponent(Exercise114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
