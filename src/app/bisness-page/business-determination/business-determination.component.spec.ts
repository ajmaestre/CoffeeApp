import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDeterminationComponent } from './business-determination.component';

describe('BusinessDeterminationComponent', () => {
  let component: BusinessDeterminationComponent;
  let fixture: ComponentFixture<BusinessDeterminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDeterminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDeterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
