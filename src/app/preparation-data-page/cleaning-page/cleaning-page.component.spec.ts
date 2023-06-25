import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningPageComponent } from './cleaning-page.component';

describe('CleaningPageComponent', () => {
  let component: CleaningPageComponent;
  let fixture: ComponentFixture<CleaningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleaningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
