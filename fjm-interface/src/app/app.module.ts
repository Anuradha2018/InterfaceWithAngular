import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular/main';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AppRoutingModule } from './app-routing.module';
import { SortBySubmittedDatePipe } from './sort-by-submitted-date.pipe';
import { FilterBySubmittedDateComponent } from './filter-by-submitted-date/filter-by-submitted-date.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    JobDetailComponent,
    JobListComponent,
    NavigatorComponent,
    SortBySubmittedDatePipe,
    FilterBySubmittedDateComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
