import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieInformation } from '../../interfaces/movie-information.interface';

@Component({
  selector: 'app-more-information-movie',
  templateUrl: './more-information-movie.component.html',
  styleUrls: ['./more-information-movie.component.css'],
})
export class MoreInformationMovieComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private movieService = inject(MovieService);

  movieInformation?: MovieInformation;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ imdbID }) => {
      this.movieService
        .getMoreInformationMovie(imdbID)
        .subscribe((information) => {
          this.movieInformation = information;
          console.log(information);
        });
    });
  }
}
