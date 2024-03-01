import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MovieFavorite } from '../../interfaces/movie-favorite.interface';
import { Search } from '../../interfaces/movie.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MovieService } from '../../services/movie.service';
import { MovieFavoriteResponse } from '../../interfaces/movie-favorite-response.interface';
import { MovieResponse } from '../../interfaces/movie-response.interface';

@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  styleUrls: ['./card-favorite.component.css'],
})
export class CardFavoriteComponent {
  @Input()
  public movies: MovieFavoriteResponse[] = [];

  // private authService = inject(AuthService);
  private movieService = inject(MovieService);

  movieUser?: MovieFavorite;
  showSuccess = false;
  showError = false;
  errorMessage?: string;

  removeFavorite(movie: MovieFavoriteResponse) {
    console.log(movie);
    this.movieService.removeFavorite(movie.id).subscribe((resp) => {});
  }
}
