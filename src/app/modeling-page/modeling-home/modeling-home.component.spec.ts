import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelingHomeComponent } from './modeling-home.component';

describe('ModelingHomeComponent', () => {
  let component: ModelingHomeComponent;
  let fixture: ComponentFixture<ModelingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
