import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise118Component } from './exercise118.component';

describe('Exercise118Component', () => {
  let component: Exercise118Component;
  let fixture: ComponentFixture<Exercise118Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise118Component]
    });
    fixture = TestBed.createComponent(Exercise118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
