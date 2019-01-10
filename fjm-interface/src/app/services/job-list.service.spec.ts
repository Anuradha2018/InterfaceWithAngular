import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JobListService } from './job-list.service';

describe('JobListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [JobListService]
  }));

  it('should be created', () => {
    const service: JobListService = TestBed.get(JobListService);
    expect(service).toBeTruthy();
  });
});
