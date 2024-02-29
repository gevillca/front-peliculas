import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthService } from '../../../../app/auth/services/auth.service';
import { Search } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-favorite',
  templateUrl: './movie-favorite.component.html',
  styleUrls: ['./movie-favorite.component.css'],
})
export class MovieFavoriteComponent implements OnInit {
  private authService = inject(AuthService);
  private movieService = inject(MovieService);

  ngOnInit(): void {
    this.listMoviesFavorites();
  }
  public user = computed(() => this.authService.currentUser());

  public movies: Search[] = [];

  searchByTitle(title: string) {
    // console.log({ title });
    this.movieService.searchMovie(title).subscribe((data) => {});
  }

  listMoviesFavorites() {
    const user = this.authService.currentUser();
    if (user) {
      this.movieService.getMoviesFavorite(user).subscribe((resp) => {
        this.movies = resp;
        console.log(resp);
      });
    }
  }
}
