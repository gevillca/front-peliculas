import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieLayoutComponent } from './layout/movie-layout/movie-layout.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieFavoriteComponent } from './pages/movie-favorite/movie-favorite.component';
import { RouterModule } from '@angular/router';
import { MoreInformationMovieComponent } from './pages/more-information-movie/more-information-movie.component';
import { MoreInformationFavoriteComponent } from './pages/more-information-favorite/more-information-favorite.component';

import { CardFavoriteComponent } from './components/card-favorite/card-favorite.component';

@NgModule({
  declarations: [
    MovieLayoutComponent,
    CardMovieComponent,
    MoviePageComponent,
    SearchMovieComponent,
    MovieFavoriteComponent,

    MoreInformationMovieComponent,
    MoreInformationFavoriteComponent,

    CardFavoriteComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, RouterModule],
})
export class MoviesModule {}
