import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionModelingPageComponent } from './selection-modeling-page.component';

describe('SelectionModelingPageComponent', () => {
  let component: SelectionModelingPageComponent;
  let fixture: ComponentFixture<SelectionModelingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionModelingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionModelingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
