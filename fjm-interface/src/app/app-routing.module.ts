import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'joblist', component: JobListComponent},
  { path: 'jobdetail', component: JobDetailComponent}
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
