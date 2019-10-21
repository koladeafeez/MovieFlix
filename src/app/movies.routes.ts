import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { Routes } from '@angular/router';
import { MovieRouteGuard } from './movie-route.guard';
import { MoviesListResolverService } from './movie-list/movies-list-resolver.service';
import { MoviesDetailsResolver } from './movie-details/movies-details-resolver.service';

export const moviesRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'movies', component: MovieListComponent, resolve: {movies:MoviesListResolverService} },
    { path: 'movies/favourite', component: FavouriteMoviesComponent },
    { path: 'movies/:_id', component: MovieDetailsComponent, canActivate: [MovieRouteGuard], resolve: {movie:MoviesDetailsResolver}},
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: '/movies', pathMatch: "full" },
    { path: 'user', loadChildren: './user-profile/user.module#UserModule'  }
]