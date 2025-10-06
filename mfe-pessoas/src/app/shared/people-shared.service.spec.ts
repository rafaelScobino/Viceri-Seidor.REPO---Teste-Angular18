import { TestBed } from '@angular/core/testing';

import { PeopleSharedService } from './people-shared.service';

describe('PeoppleSharedService', () => {
  let service: PeopleSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
