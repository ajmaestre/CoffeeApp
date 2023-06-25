import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatingPageComponent } from './formating-page.component';

describe('FormatingPageComponent', () => {
  let component: FormatingPageComponent;
  let fixture: ComponentFixture<FormatingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
