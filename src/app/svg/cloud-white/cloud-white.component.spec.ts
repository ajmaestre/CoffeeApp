import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudWhiteComponent } from './cloud-white.component';

describe('CloudWhiteComponent', () => {
  let component: CloudWhiteComponent;
  let fixture: ComponentFixture<CloudWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudWhiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
