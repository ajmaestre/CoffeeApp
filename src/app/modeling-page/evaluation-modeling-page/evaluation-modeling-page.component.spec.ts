import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationModelingPageComponent } from './evaluation-modeling-page.component';

describe('EvaluationModelingPageComponent', () => {
  let component: EvaluationModelingPageComponent;
  let fixture: ComponentFixture<EvaluationModelingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationModelingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationModelingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
