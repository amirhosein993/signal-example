import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayExamplesComponent } from './array-examples.component';

describe('ArrayExamplesComponent', () => {
  let component: ArrayExamplesComponent;
  let fixture: ComponentFixture<ArrayExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayExamplesComponent]
    });
    fixture = TestBed.createComponent(ArrayExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
