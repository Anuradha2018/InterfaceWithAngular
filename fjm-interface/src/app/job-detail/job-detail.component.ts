import { Component, OnInit } from '@angular/core';
import { JobRecord } from './../models/jobRecord';
import { HttpClient } from '@angular/common/http';
import { JobListService } from './../job-list.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
