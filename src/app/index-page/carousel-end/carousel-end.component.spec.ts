import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEndComponent } from './carousel-end.component';

describe('CarouselEndComponent', () => {
  let component: CarouselEndComponent;
  let fixture: ComponentFixture<CarouselEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
