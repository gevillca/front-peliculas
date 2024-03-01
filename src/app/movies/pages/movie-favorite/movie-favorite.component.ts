import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthService } from '../../../../app/auth/services/auth.service';

import { MovieService } from '../../services/movie.service';
import { MovieFavoriteResponse } from '../../interfaces/movie-favorite-response.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-favorite',
  templateUrl: './movie-favorite.component.html',
  styleUrls: ['./movie-favorite.component.css'],
})
export class MovieFavoriteComponent implements OnInit {
  private authService = inject(AuthService);
  private movieService = inject(MovieService);
  private moviesSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.listMoviesFavorites();
    this.subscribeToMovieChanges();
  }

  ngOnDestroy(): void {
    this.moviesSubscription.unsubscribe();
  }
  public user = computed(() => this.authService.currentUser());
  public updateFlag = false;

  limit: number = 10;
  offset: number = 0;

  public movies: MovieFavoriteResponse[] = [];

  listMoviesFavorites() {
    const user = this.authService.currentUser();
    if (user) {
      this.movieService.getMoviesFavorite(user).subscribe((resp) => {
        this.movies = resp;
      });
    }
  }
  searchByTitleFavorite(title: string) {
    this.movieService
      .getMoviesFavoriteUser(title, this.limit, this.offset)
      .subscribe((data: any) => {
        this.movies = data.peliculas;
      });
  }

  private subscribeToMovieChanges() {
    this.moviesSubscription.unsubscribe();
    this.moviesSubscription = this.movieService.movies$.subscribe(
      (updatedMovies) => {
        this.movies = updatedMovies;
      }
    );
  }
}
