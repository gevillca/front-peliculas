import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    //can
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'movie',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '**',
    redirectTo: 'movie',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
