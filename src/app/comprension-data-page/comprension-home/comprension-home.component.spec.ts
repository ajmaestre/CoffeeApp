import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprensionHomeComponent } from './comprension-home.component';

describe('ComprensionHomeComponent', () => {
  let component: ComprensionHomeComponent;
  let fixture: ComponentFixture<ComprensionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprensionHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprensionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
