import { FilterBySubmittedDateComponent } from './filter-by-submitted-date/filter-by-submitted-date.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'jobdetail/:ID', component: JobDetailComponent},
  { path: 'about', component: AboutComponent },
  { path: 'joblist', component: JobListComponent},
  { path: 'filteredjob', component: FilterBySubmittedDateComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ],
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
