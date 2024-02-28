import { Injectable, inject } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Movies, Search } from '../interfaces/movie.interface';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public apiMovie: string = environments.apiMovie;

  private http = inject(HttpClient);

  searchMovie(title: string): Observable<Search[] | []> {
    return this.http.get<Movies>(`${this.apiMovie}=${title}`).pipe(
      // tap((resp: Movies) => {
      //   console.log('servicio:', resp);
      // }),
      map((resp: Movies) => resp.Search)
    );
  }
}
