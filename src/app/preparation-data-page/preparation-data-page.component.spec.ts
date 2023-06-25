import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationDataPageComponent } from './preparation-data-page.component';

describe('PreparationDataPageComponent', () => {
  let component: PreparationDataPageComponent;
  let fixture: ComponentFixture<PreparationDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparationDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
