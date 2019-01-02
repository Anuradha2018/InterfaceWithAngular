import { JobListService } from './../job-list.service';
import { Component, OnInit } from '@angular/core';
import { JobRecord } from './../models/jobRecord';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
jobs: any = [];

  constructor(private jobListService: JobListService) { }
  

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.jobListService.getjobs().subscribe((data: {}) =>{
      this.jobs = data;
      console.log(data);
    })
  }

}
