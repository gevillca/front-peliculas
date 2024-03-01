import { Component, Input, inject } from '@angular/core';
import { MovieFavorite } from '../../interfaces/movie-favorite.interface';

import { MovieService } from '../../services/movie.service';
import { MovieFavoriteResponse } from '../../interfaces/movie-favorite-response.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  styleUrls: ['./card-favorite.component.css'],
})
export class CardFavoriteComponent {
  @Input()
  public movies: MovieFavoriteResponse[] = [];

  private authService = inject(AuthService);
  private movieService = inject(MovieService);

  movieUser?: MovieFavorite;
  showSuccess = false;
  showError = false;
  errorMessage?: string;

  removeFavorite(movie: MovieFavoriteResponse) {
    const user = this.authService.currentUser();
    if (user) {
      this.movieService.removeFavorite(movie, user.id).subscribe((resp) => {});
    }
  }
}
