import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieLayoutComponent } from './layout/movie-layout/movie-layout.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MovieFavoriteComponent } from './pages/movie-favorite/movie-favorite.component';

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
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
