import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IMovies } from '../common/movie.model';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie: IMovies;
  constructor(private moviesservice: MoviesService,
    private routes: ActivatedRoute ) { 
    
  }

  ngOnInit() {
    this.routes.data.forEach( (data) => {
   this.movie = data['movie']
   console.log("movies detail", this.movie)
    })
  }

  setFavouriteMovie(){
    console.log('favourite button')
    this.moviesservice.setFavouriteMovie(this.movie);
  }
}
