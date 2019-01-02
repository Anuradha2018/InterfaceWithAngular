import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBySubmittedDateComponent } from './filter-by-submitted-date.component';

describe('FilterBySubmittedDateComponent', () => {
  let component: FilterBySubmittedDateComponent;
  let fixture: ComponentFixture<FilterBySubmittedDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBySubmittedDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBySubmittedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
