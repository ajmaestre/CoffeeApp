import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksPdpComponent } from './links-pdp.component';

describe('LinksPdpComponent', () => {
  let component: LinksPdpComponent;
  let fixture: ComponentFixture<LinksPdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksPdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksPdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
