import { TestBed } from '@angular/core/testing';

import { RAGMessageList } from './ragmessage-list';

describe('RAGMessageList', () => {
  let service: RAGMessageList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RAGMessageList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
