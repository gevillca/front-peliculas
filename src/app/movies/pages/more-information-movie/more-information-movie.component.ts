import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieInformation } from '../../interfaces/movie-information.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

import { MovieFavorite } from '../../interfaces/movie-favorite.interface';

@Component({
  selector: 'app-more-information-movie',
  templateUrl: './more-information-movie.component.html',
  styleUrls: ['./more-information-movie.component.css'],
})
export class MoreInformationMovieComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  private authService = inject(AuthService);

  public isLoggedIn = this.authService.authStatus();
  movieUser?: MovieFavorite;
  showSuccess = false;
  showError = false;
  errorMessage?: string;
  movieInformation?: MovieInformation;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ imdbID }) => {
      this.movieService
        .getMoreInformationMovie(imdbID)
        .subscribe((information) => {
          this.movieInformation = information;
        });
    });
  }

  saveFavorite() {
    if (this.movieInformation) {
      this.movieService
        .getMoreInformationMovie(this.movieInformation.imdbID)
        .subscribe(({ imdbID, Title, Actors, Year, Poster, Director }) => {
          this.movieUser = {
            actors: Actors,
            title: Title,
            year: Year,
            poster: Poster,
            director: Director,
            imdbID: imdbID,
          };
          this.saveFavoriteData();
        });
    }
  }

  private saveFavoriteData() {
    const user = this.authService.currentUser();
    if (user) {
      this.movieService.saveFavorite(this.movieUser, user).subscribe({
        next: (resp) => {
          this.showSuccess = true;

          setTimeout(() => {
            this.showSuccess = false;
          }, 3000);
        },
        error: (error) => {
          this.showError = true;
          this.errorMessage = error;
          setTimeout(() => {
            this.showError = false;
          }, 3000);
        },
      });
    }
  }
}
