import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  @Input() movie = {
    id: '',
    name: 'Vikram',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    rating: 8.4,
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
    trailer: '',
  };
  @Input() movieName = '';
  @Output() removeMovie = new EventEmitter();

  count = 0;
  increment() {
    console.log('incrementing');
    this.count++;
  }
  dcount = 0;
  decrement() {
    console.log('decrementing');
    this.dcount++;
  }
  show = true;
  toggleSummary() {
    this.show = !this.show;
  }
  constructor(private router: Router, private movieService: MovieService) {}
  movieDetailsPage() {
    this.router.navigate([`/movies`, this.movie.id]);
  }
  deleteMovie() {
    this.movieService.deleteMovieById(this.movie.id).subscribe(() => {
      console.log('Movie deleted');
      this.removeMovie.emit();
      // this.movieService.getMovieListFromMockApi();
      // this.router.navigate(["/movies"])
    });
  }
  // (removeMovie)="loadMoviesData()"
  editPage() {
    this.router.navigate(['/movies/edit', this.movie.id]);
  }
}
