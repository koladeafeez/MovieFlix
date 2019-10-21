import { TestBed } from '@angular/core/testing';

import { MoviesListResolverService } from './movies-list-resolver.service';

describe('MoviesListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesListResolverService = TestBed.get(MoviesListResolverService);
    expect(service).toBeTruthy();
  });
});
