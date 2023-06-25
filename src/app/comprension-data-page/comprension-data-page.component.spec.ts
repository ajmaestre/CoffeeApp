import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprensionDataPageComponent } from './comprension-data-page.component';

describe('ComprensionDataPageComponent', () => {
  let component: ComprensionDataPageComponent;
  let fixture: ComponentFixture<ComprensionDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprensionDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprensionDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
