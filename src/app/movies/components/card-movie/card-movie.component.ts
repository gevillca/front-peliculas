import { Component, Input, OnInit } from '@angular/core';
import { Search } from '../../interfaces/movie.interface';

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
}
