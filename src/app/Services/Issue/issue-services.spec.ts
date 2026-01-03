import { TestBed } from '@angular/core/testing';

import { IssueServices } from './issue-services';

describe('IssueServices', () => {
  let service: IssueServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
