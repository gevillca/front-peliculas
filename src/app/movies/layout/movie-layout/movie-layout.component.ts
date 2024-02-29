import { Component, computed, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Search } from '../../interfaces/movie.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-movie-layout',
  templateUrl: './movie-layout.component.html',
  styleUrls: ['./movie-layout.component.css'],
})
export class MovieLayoutComponent {
  private movieService = inject(MovieService);
  private authService = inject(AuthService);
  public isLoggedIn = this.authService.authStatus;

  movies: Search[] = [];
  searchByTitle(title: string) {
    this.movieService.searchMovie(title).subscribe((resp) => {
      this.movies = resp;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
