import { TestBed } from '@angular/core/testing';

import { ResultList } from './result-list';

describe('ResultList', () => {
  let service: ResultList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
