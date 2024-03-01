import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieLayoutComponent } from './layout/movie-layout/movie-layout.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MovieFavoriteComponent } from './pages/movie-favorite/movie-favorite.component';

import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { MoreInformationMovieComponent } from './pages/more-information-movie/more-information-movie.component';
import { MoreInformationFavoriteComponent } from './pages/more-information-favorite/more-information-favorite.component';

const routes: Routes = [
  {
    path: '',
    component: MovieLayoutComponent,
    children: [
      {
        path: '',
        component: MoviePageComponent,
      },
      {
        path: 'favorite',
        component: MovieFavoriteComponent,
        canActivate: [isAuthenticatedGuard],
      },
      {
        path: 'more-information/:imdbID',
        component: MoreInformationMovieComponent,
      },
      {
        path: 'favorite/more-information-user/:imdbID',
        component: MoreInformationFavoriteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
