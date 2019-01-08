import { JobListService } from './../job-list.service';
import { Component, OnInit } from '@angular/core';
import { JobRecord } from './../models/jobRecord';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: JobRecord;

  constructor(private jobListService: JobListService,
    private router: Router) { }
  
ngOnInit() {
     this.jobListService.getjobs()
    .subscribe((data:{}) =>{
      this.jobs = data;
    })
  } 
  onSelect(job) {
    this.router.navigate(['/jobdetail',job.ID]);
  }
}
