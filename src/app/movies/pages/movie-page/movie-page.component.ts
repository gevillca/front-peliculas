import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Search } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent {
  private movieService = inject(MovieService);

  movies: Search[] = [];

  searchByTitle(title: string) {
    // console.log({ title });
    this.movieService.searchMovie(title).subscribe((data) => {
      this.movies = data;
    });
  }
}
