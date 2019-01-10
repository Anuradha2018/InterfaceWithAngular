import { Injectable } from '@angular/core';
import { Stats } from '../models/stats';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  statsURL: string = "http://localhost:5000/v0/stats";

  constructor(private httpClient: HttpClient) { }
  getStats() {
    return  this.httpClient.get(`${this.statsURL}`);
  }
}
