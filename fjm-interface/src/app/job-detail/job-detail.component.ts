import { Component, OnInit, Input } from '@angular/core';
import { JobRecord } from './../models/jobRecord';
import { JobListService } from './../services/job-list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: JobRecord;
  jobs: JobRecord[];


  constructor( 
    private route: ActivatedRoute,
    private jobListService: JobListService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id); for testing
    this.jobListService.getjobdetails(id).subscribe(a =>{
      console.log(a);
       this.job = a
    });
    console.log(this.job);
  }

}
