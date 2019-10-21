import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from '../movies.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesDetailsResolver implements Resolve<any> {

  constructor(private moviesservice: MoviesService) { }
  resolve(route: ActivatedRouteSnapshot) {
 return  this.moviesservice.getMovie(route.params['_id']);
    
  }
}