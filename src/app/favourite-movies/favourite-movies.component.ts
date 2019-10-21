import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { IMovies } from '../common/movie.model';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {
movie: IMovies;
  constructor(private movieservice: MoviesService) { }

  ngOnInit() {
    this.movie = this.movieservice.favouriteMovie;
  }

}
