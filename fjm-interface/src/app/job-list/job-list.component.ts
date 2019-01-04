import { JobListService } from './../job-list.service';
import { Component, OnInit } from '@angular/core';
import { JobRecord } from './../models/jobRecord';;
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: JobRecord ;
  selectedId:number;

  constructor(private jobListService: JobListService,
    private router: Router) { }
  

  ngOnInit() {
     this.getData();
  }
  getData() {
    this.jobListService.getjobdetails()
    .subscribe((data:{}) =>{
      this.jobs = data;
      console.log(data);
    })
  }
  onSelect(job) {
    this.router.navigate(['/jobdetail',job.ID]);
  }
  

}
