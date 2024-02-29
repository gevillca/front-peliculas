import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieLayoutComponent } from './layout/movie-layout/movie-layout.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MovieFavoriteComponent } from './pages/movie-favorite/movie-favorite.component';
import { MoreInformationMovieComponent } from './components/more-information-movie/more-information-movie.component';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
