import { AboutService } from './../about.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: Array<object> = [];
 
  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getAbout();
 }
 getAbout() {
   this.aboutService.getDetails().subscribe((data: Array<object>) =>{
     this.about = data;
     console.log(data);
   })
 }
}
