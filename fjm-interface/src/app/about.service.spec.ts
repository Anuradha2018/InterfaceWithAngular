import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AboutService } from './about.service';

describe('AboutService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AboutService],
    declarations: []
  }));

  it('should be created', () => {
    const service: AboutService = TestBed.get(AboutService);
    expect(service).toBeTruthy();
  });
});
