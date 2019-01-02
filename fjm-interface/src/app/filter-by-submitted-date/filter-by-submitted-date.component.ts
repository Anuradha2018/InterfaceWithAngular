import { Component, OnInit } from '@angular/core';
import { JobRecord } from './../models/jobRecord';
import { HttpClient } from '@angular/common/http';
import { JobListService } from './../job-list.service';

@Component({
  selector: 'app-filter-by-submitted-date',
  templateUrl: './filter-by-submitted-date.component.html',
  styleUrls: ['./filter-by-submitted-date.component.css']
})
export class FilterBySubmittedDateComponent implements OnInit {
  columnDefs = [
    {headerName: 'Name', field: 'name' },
    { headerName: 'State', field: 'state'},
    {headerName: 'Submitted At', field: 'timestamps.submitted' },
    {headerName: 'Last Modified At', field: 'timestamps.lastModified'}
];
rowData: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.rowData = this.httpClient.get('http://localhost:5000/v0/jobs?limit=50&offset=0');
  }

}
