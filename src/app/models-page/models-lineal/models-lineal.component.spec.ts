import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsLinealComponent } from './models-lineal.component';

describe('ModelsLinealComponent', () => {
  let component: ModelsLinealComponent;
  let fixture: ComponentFixture<ModelsLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsLinealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelsLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
