import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgGridModule } from 'ag-grid-angular';

import { FilterBySubmittedDateComponent } from './filter-by-submitted-date.component';
import { JobListService } from '../job-list.service';

describe('FilterBySubmittedDateComponent', () => {
  let component: FilterBySubmittedDateComponent;
  let fixture: ComponentFixture<FilterBySubmittedDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AgGridModule.withComponents([])],
      declarations: [ FilterBySubmittedDateComponent ],
      providers: [ JobListService]
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
