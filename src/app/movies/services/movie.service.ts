import { Injectable, inject } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Movies, Search } from '../interfaces/movie.interface';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { MovieInformation } from '../interfaces/movie-information.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public apiMovie: string = environments.apiMovie;

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
}
