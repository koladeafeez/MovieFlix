import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IMovies } from '../common/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnChanges {
  @Input() movies: IMovies[];
  movieArr: IMovies[];

  @Input() filterBy: string;
   visibleMovies: IMovies[] = [];
  constructor() { }

  ngOnInit() {
  // / this.movieArr = this.movies;
    console.log('moviecard : ', this.movieArr)
  }

  ngOnChanges() {
    console.log('filterBy : ', this.filterBy)
    if(this.movies) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter) {
    if(filter === 'all') {
      this.visibleMovies= this.movies.slice(0);
    } else {
      this.visibleMovies = this.movies.filter(movie => {
      return movie.genre.includes(this.filterBy);
      })

  }
}
}
