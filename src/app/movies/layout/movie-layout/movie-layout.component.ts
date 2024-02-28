import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movies, Search } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-layout',
  templateUrl: './movie-layout.component.html',
  styleUrls: ['./movie-layout.component.css'],
})
export class MovieLayoutComponent {
  private movieService = inject(MovieService);
  movies: Search[] = [];
  searchByTitle(title: string) {
    // console.log({ title });
    this.movieService.searchMovie(title).subscribe((resp) => {
      console.log(resp);
      this.movies = resp;
    });
  }
}
