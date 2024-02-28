import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieLayoutComponent } from './layout/movie-layout/movie-layout.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieFavoriteComponent } from './pages/movie-favorite/movie-favorite.component';
import { RouterModule } from '@angular/router';
import { ModalMovieComponent } from './components/modal-movie/modal-movie.component';

@NgModule({
  declarations: [
    MovieLayoutComponent,
    CardMovieComponent,
    MoviePageComponent,
    SearchMovieComponent,
    MovieFavoriteComponent,
    ModalMovieComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, RouterModule],
})
export class MoviesModule {}
