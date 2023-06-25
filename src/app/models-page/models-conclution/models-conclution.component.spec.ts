import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsConclutionComponent } from './models-conclution.component';

describe('ModelsConclutionComponent', () => {
  let component: ModelsConclutionComponent;
  let fixture: ComponentFixture<ModelsConclutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsConclutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsConclutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
