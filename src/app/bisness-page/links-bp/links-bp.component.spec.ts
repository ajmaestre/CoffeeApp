import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksBpComponent } from './links-bp.component';

describe('LinksBpComponent', () => {
  let component: LinksBpComponent;
  let fixture: ComponentFixture<LinksBpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksBpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
