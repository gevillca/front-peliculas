import { Injectable, inject } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movies, Search } from '../interfaces/movie.interface';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  tap,
  throwError,
} from 'rxjs';
import { User } from 'src/app/auth/interfaces';
import {
  MovieFavoriteResponse,
  MovieInformation,
  MovieResponse,
  FavoriteUserResponse,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public apiMovie: string = environments.apiMovie;
  public apiLocal: string = environments.apiLocal;
  private http = inject(HttpClient);

  private moviesSubject = new BehaviorSubject<MovieFavoriteResponse[]>([]);
  movies$: Observable<MovieFavoriteResponse[]> =
    this.moviesSubject.asObservable();

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

  getMoviesFavoriteUser(term: string, limit: number, offset: number) {
    const url = `${this.apiLocal}/peliculas/buscar`;

    let params = new HttpParams()
      .set('termino', term)
      .set('limit', limit.toString())
      .set('offset', offset.toString());

    return this.http.get<FavoriteUserResponse[]>(url, { params }).pipe(
      tap((resp) => {
        console.log(resp);
      })
    );
  }

  removeFavorite(movie: MovieFavoriteResponse, user_id: string) {
    const { id } = movie;
    const url = `${this.apiLocal}/peliculas/favoritas/eliminar/${id}`;
    this.getUpdatedMoviesFavorite(user_id).subscribe((updatedMovies) => {
      this.moviesSubject.next(updatedMovies);
    });

    return this.http.delete<MovieResponse>(url);
  }

  private getUpdatedMoviesFavorite(
    user_id: string
  ): Observable<MovieFavoriteResponse[]> {
    const url = `${this.apiLocal}/peliculas/lista-favorito/${user_id}`;
    return this.http.get<MovieFavoriteResponse[]>(url);
  }
}
