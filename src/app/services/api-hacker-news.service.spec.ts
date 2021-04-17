import { TestBed } from '@angular/core/testing';

import { ApiHackerNewsService } from './api-hacker-news.service';

describe('ApiHackerNewsService', () => {
  let service: ApiHackerNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHackerNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
