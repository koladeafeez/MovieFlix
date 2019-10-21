import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MoviesFooterComponent } from './movies-footer/movies-footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { moviesRoutes } from './movies.routes';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './login/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    MoviesFooterComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    FavouriteMoviesComponent,
    LoginComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(moviesRoutes),
    FormsModule,
    HttpClientModule


  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
