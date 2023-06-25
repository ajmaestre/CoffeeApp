import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessEstateComponent } from './business-estate.component';

describe('BusinessEstateComponent', () => {
  let component: BusinessEstateComponent;
  let fixture: ComponentFixture<BusinessEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessEstateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
