import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  aboutURL: string = 'http://localhost:5000/about';

  constructor(private httpClient: HttpClient) { }
  getDetails (){
    return  this.httpClient.get(`${this.aboutURL}`);
}

}
