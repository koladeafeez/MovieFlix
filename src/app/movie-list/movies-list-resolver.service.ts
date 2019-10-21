import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {map} from "rxjs/operators";
import { MoviesService } from '../movies.service';
import { IMovies } from '../common/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesListResolverService implements Resolve<any> {

  constructor(private moviesservice: MoviesService) { }
  resolve() {
    this.moviesservice.getMovies().subscribe(movie=>{
      console.log(movie)
    })
return  this.moviesservice.getMovies();
    
  }
}
