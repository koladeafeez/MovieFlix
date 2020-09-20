import { Component, OnInit, OnChanges } from "@angular/core";
import { MoviesService } from "../movies.service";
import { Router, ActivatedRoute } from "@angular/router";
import { IMovies } from "../common/movie.model";
// <div class="container-fluid card-wrapper">
@Component({
  selector: "app-movie-list",
  template: `
    <div class="container-fluid">
      <div class="row main-section">
        <div class="col-md-8">
          <h3 class="main-h3">
            Enjoy All Latest Release On Any Device, Anyday and Anytime
          </h3>
        </div>
        <section class="col-md-4 main-section-img">
          <img src="../../assets/img/main-section.jpg" class=" img-fluid" />
        </section>
      </div>
    </div>
    <h4>Filter By Genre</h4>
    <div class="group-btn">
      <button
        class="btn btn-secondary "
        [class.active]="filterBy === 'all'"
        (click)="filterBy = 'all'"
      >
        All
      </button>
      <button
        class="btn btn-secondary  "
        [class.active]="filterBy === 'beginner'"
        (click)="filterBy = 'Action'"
      >
        Action
      </button>
      <button
        class="btn btn-secondary"
        active
        [class.active]="filterBy === 'intermediate'"
        (click)="filterBy = 'Drama'"
      >
        Drama
      </button>
      <button
        class="btn btn-secondary"
        active
        [class.active]="filterBy === 'advanced'"
        (click)="filterBy = 'Comedy'"
      >
        Comedy
      </button>
      <button
        class="btn btn-secondary"
        active
        [class.active]="filterBy === 'advanced'"
        (click)="filterBy = 'Sci-Fi'"
      >
        Sci-Fi
      </button>
    </div>

    <app-movie-card [filterBy]="filterBy" [movies]="movies"></app-movie-card>
  `,
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  movies: IMovies;
  visibleMovies: IMovies;
  addMode: boolean;
  filterBy: string = "all";

  constructor(
    private moviesservice: MoviesService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movies = this.routes.snapshot.data["movies"];
    console.log("movies : ", this.movies);
  }
}
