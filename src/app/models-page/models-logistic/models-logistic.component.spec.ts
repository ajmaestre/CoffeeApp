import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsLogisticComponent } from './models-logistic.component';

describe('ModelsLogisticComponent', () => {
  let component: ModelsLogisticComponent;
  let fixture: ComponentFixture<ModelsLogisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsLogisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsLogisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
