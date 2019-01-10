import { JobListService } from './job-list.service';
import { Pipe, PipeTransform } from '@angular/core';
import { JobRecord } from './models/jobRecord';


@Pipe({
  name: 'sortBySubmittedDate',
  pure: false
})
export class SortBySubmittedDatePipe implements PipeTransform {
  
  constructor(private jobListService: JobListService) {}
  transform(value: any, args?: any): any {
    let newJob = value.sort((a: JobRecord, b: JobRecord) => {
        let date1 = new Date(a.timestamps.submitted.valueOf());
        let date2 = new Date(b.timestamps.submitted.valueOf());

        if (date1 > date2) {
            return 1;
        } else if (date1 < date2) {
            return -1;
        } else {
            return 0;
        }
    });

    return newJob;
}

}
