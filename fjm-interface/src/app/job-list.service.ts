import { JobRecord } from './models/jobRecord';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobListService {
  jobs: JobRecord[]=[];
  jobURL: string = "http://localhost:5000/v0/jobs?limit=50&offset=0";
  jobDetailURL: string = "http://localhost:5000/v0/jobs/"

  constructor(private httpClient: HttpClient) { }

  

  getjobs() {
    return this.httpClient.get(`${this.jobURL}`);
  }
  getjobdetails() {
    return this.httpClient.get(`${this.jobDetailURL}`);
  }
  getJob(id: string) {
    return this.jobs.find(j =>j.ID === id);
  }
}
