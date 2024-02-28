import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent {
  private movieService = inject(MovieService);

  @Output()
  public onValue = new EventEmitter<string>();

  searchMovie(title: string): void {
    this.onValue.emit(title);
  }
}
