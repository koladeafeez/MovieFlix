import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class MovieRouteGuard implements CanActivate {
  constructor(private movieservice: MoviesService,
    private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const movieExist= !!this.movieservice.getMovie(next.params['id'])
    if(!movieExist)
    this.router.navigate(['/404'])
    return movieExist;
  }
  
}
