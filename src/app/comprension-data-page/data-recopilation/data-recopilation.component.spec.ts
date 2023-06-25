import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRecopilationComponent } from './data-recopilation.component';

describe('DataRecopilationComponent', () => {
  let component: DataRecopilationComponent;
  let fixture: ComponentFixture<DataRecopilationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRecopilationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataRecopilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
