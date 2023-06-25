import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksMspComponent } from './links-msp.component';

describe('LinksMspComponent', () => {
  let component: LinksMspComponent;
  let fixture: ComponentFixture<LinksMspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksMspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksMspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
