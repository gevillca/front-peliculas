import { Component, Input, OnInit, inject } from '@angular/core';
import { Search } from '../../interfaces/movie.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MovieFavorite } from '../../interfaces/movie-favorite.interface';
import { MovieInformation } from '../../interfaces/movie-information.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent {
  // ngOnInit(): void {
  //   console.log(this.movies);
  // }
  @Input()
  public movies: Search[] = [];

  movieUser?: MovieFavorite;
  showSuccess = false;
  showError = false;
  errorMessage?: string;

  private authService = inject(AuthService);
  private movieService = inject(MovieService);
  public isLoggedIn = this.authService.authStatus;

  saveFavorite(movie: Search) {
    this.movieService
      .getMoreInformationMovie(movie.imdbID)
      .subscribe(({ Title, Actors, Year, Poster, Director }) => {
        this.movieUser = {
          actors: Actors,
          title: Title,
          year: Year,
          poster: Poster,
          director: Director,
          imdbID: movie.imdbID,
        };
        this.saveFavoriteData();
        // Muestra el "toast alert"
      });
  }

  private saveFavoriteData() {
    const user = this.authService.currentUser();
    if (user) {
      this.movieService.saveFavorite(this.movieUser, user).subscribe({
        next: (resp) => {
          // Código para manejar la respuesta exitosa
          // console.log('Respuesta exitosa:', resp);
          this.showSuccess = true;

          setTimeout(() => {
            this.showSuccess = false;
          }, 3000);
        },
        error: (error) => {
          // Código para manejar el error
          this.showError = true;
          this.errorMessage = error;
          setTimeout(() => {
            this.showError = false;
          }, 3000);
          // console.error('Error al guardar la película como favorita:', error);
          // throw new Error('Error al guardar la película como favorita');
        },
      });
    }
  }
}
