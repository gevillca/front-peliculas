import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInformation } from '../../interfaces/movie-information.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-more-information-favorite',
  templateUrl: './more-information-favorite.component.html',
  styleUrls: ['./more-information-favorite.component.css'],
})
export class MoreInformationFavoriteComponent {
  private activatedRoute = inject(ActivatedRoute);
  private movieService = inject(MovieService);

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
}
