import { Injectable, inject } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Movies, Search } from '../interfaces/movie.interface';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { MovieInformation } from '../interfaces/movie-information.interface';

import { MovieResponse } from '../interfaces/movie-response.interface';
import { User } from 'src/app/auth/interfaces';
import { MovieFavoriteResponse } from '../interfaces/movie-favorite-response.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public apiMovie: string = environments.apiMovie;
  public apiLocal: string = environments.apiLocal;

  private http = inject(HttpClient);

  searchMovie(title: string): Observable<Search[] | []> {
    return this.http.get<Movies>(`${this.apiMovie}s=${title}`).pipe(
      // tap((resp: Movies) => {
      //   console.log('servicio:', resp);
      // }),
      map((resp: Movies) => resp.Search)
    );
  }

  getMoreInformationMovie(imdbID: string): Observable<MovieInformation> {
    return this.http.get<MovieInformation>(`${this.apiMovie}i=${imdbID}`);
  }

  saveFavorite(movie: any, user: User) {
    const movieFavorite = {
      ...movie,
      usuario_id: user.id,
    };

    const url = `${this.apiLocal}/peliculas/favorito`;
    return this.http.post<MovieResponse>(url, movieFavorite).pipe(
      catchError((error) => {
        return throwError(() => error.error.message);
      })
    );
  }
  getMoviesFavorite(user: User) {
    const url = `${this.apiLocal}/peliculas/lista-favorito/${user.id}`;
    return this.http.get<MovieFavoriteResponse[]>(url);
  }
  removeFavorite(id: string) {
    const url = `${this.apiLocal}/peliculas/favoritas/eliminar/${id}`;
    return this.http.delete<MovieResponse>(url);
  }
}
