import { StatsService } from './../stats.service';
import { Component, OnInit } from '@angular/core';
import { Stats } from './../models/stats';



@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: Stats;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.getStats();
  }
  getStats() {
    
    this.statsService.getStats().subscribe((data:any) =>{
      this.stats = data;
      console.log(data);// to test data flow
    })
  }

}
