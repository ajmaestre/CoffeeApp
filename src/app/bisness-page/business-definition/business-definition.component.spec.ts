import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDefinitionComponent } from './business-definition.component';

describe('BusinessDefinitionComponent', () => {
  let component: BusinessDefinitionComponent;
  let fixture: ComponentFixture<BusinessDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDefinitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
