import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationModelingPageComponent } from './generation-modeling-page.component';

describe('GenerationModelingPageComponent', () => {
  let component: GenerationModelingPageComponent;
  let fixture: ComponentFixture<GenerationModelingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationModelingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationModelingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
