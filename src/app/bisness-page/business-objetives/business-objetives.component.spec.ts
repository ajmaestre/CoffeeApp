import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessObjetivesComponent } from './business-objetives.component';

describe('BusinessObjetivesComponent', () => {
  let component: BusinessObjetivesComponent;
  let fixture: ComponentFixture<BusinessObjetivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessObjetivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessObjetivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
