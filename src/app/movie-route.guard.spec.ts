import { TestBed, async, inject } from '@angular/core/testing';

import { MovieRouteGuard } from './movie-route.guard';

describe('MovieRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieRouteGuard]
    });
  });

  it('should ...', inject([MovieRouteGuard], (guard: MovieRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
