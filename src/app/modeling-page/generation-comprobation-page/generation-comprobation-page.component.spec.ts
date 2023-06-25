import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationComprobationPageComponent } from './generation-comprobation-page.component';

describe('GenerationComprobationPageComponent', () => {
  let component: GenerationComprobationPageComponent;
  let fixture: ComponentFixture<GenerationComprobationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationComprobationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationComprobationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
