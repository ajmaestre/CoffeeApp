import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksMpComponent } from './links-mp.component';

describe('LinksMpComponent', () => {
  let component: LinksMpComponent;
  let fixture: ComponentFixture<LinksMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksMpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
