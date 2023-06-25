import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationHomeComponent } from './preparation-home.component';

describe('PreparationHomeComponent', () => {
  let component: PreparationHomeComponent;
  let fixture: ComponentFixture<PreparationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
