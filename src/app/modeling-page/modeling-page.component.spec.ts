import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelingPageComponent } from './modeling-page.component';

describe('ModelingPageComponent', () => {
  let component: ModelingPageComponent;
  let fixture: ComponentFixture<ModelingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
