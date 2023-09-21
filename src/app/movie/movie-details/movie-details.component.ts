import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  id: string = '';
  movie: any;

  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {
    const { id } = this.router.snapshot.params;
    this.id = id;
  }

  ngOnInit() {
    this.movieService.getMovieById(this.id).subscribe((mv) => {
      console.log(mv);
      this.movie = {
        ...mv,
        trailer: this.sanitizer.bypassSecurityTrustResourceUrl(mv.trailer),
      };
    });
  }
}
