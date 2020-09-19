import { Injectable } from "@angular/core";
import { Subject, Observable, of } from "rxjs";
import { IMovies } from "./common/movie.model";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  favouriteMovie: any;
  constructor(private http: HttpClient) {}
  getMovies(): Observable<IMovies[]> {
    // let subject = new Subject<IMovies[]>()
    // setTimeout(() => {
    //   subject.next(movies);
    //   subject.complete();
    // }, 100)
    // return subject;
    console.log("cors");
    return this.http
      .get<IMovies[]>("https://muvieflixx.herokuapp.com/api/movies/")
      .pipe(catchError(this.handleError<IMovies[]>("getMovies", [])));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getMovie(_id): Observable<IMovies> {
    return this.http
      .get<IMovies>("https://muvieflixx.herokuapp.com/api/movies/" + _id)
      .pipe(catchError(this.handleError<IMovies>("getMovie")));
  }

  setFavouriteMovie(favouriteMovie) {
    this.favouriteMovie = favouriteMovie;
  }
}
