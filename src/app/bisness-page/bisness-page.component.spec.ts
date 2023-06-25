import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisnessPageComponent } from './bisness-page.component';

describe('BisnessPageComponent', () => {
  let component: BisnessPageComponent;
  let fixture: ComponentFixture<BisnessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BisnessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BisnessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
