import { Component, OnInit, Input } from '@angular/core';
import { JobRecord } from './../models/jobRecord';
import { JobListService } from './../job-list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  private id: string;
  job: JobRecord;
  jobs: JobRecord[] = [];


  constructor( 
    private route: ActivatedRoute,
    private jobListService: JobListService) { }

  ngOnInit() {

    this.id = (+this.route.snapshot.paramMap.get['ID']).toString();
    this.job = this.jobListService.getJob(this.id);
  }
 

}
