import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksCdpComponent } from './links-cdp.component';

describe('LinksCdpComponent', () => {
  let component: LinksCdpComponent;
  let fixture: ComponentFixture<LinksCdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksCdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksCdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
