import { JobRecord } from './models/jobRecord';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobListService {
  jobs: JobRecord[]= [];
  jobURL: string = "http://localhost:5000/v0/jobs?limit=50&offset=0";

  constructor(private httpClient: HttpClient) { }
  getjobs() {
    return  this.httpClient.get(`${this.jobURL}`);
  }
}
