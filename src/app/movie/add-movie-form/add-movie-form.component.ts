import { Component } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../../app.component';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css'],
})
export class AddMovieFormComponent {
  movieForm = this.fb.group({
    movieName: ['', [Validators.required, Validators.minLength(5)]],
    movieRating: [
      0,
      [Validators.required, Validators.min(1), Validators.max(10)],
    ],
    movieImage: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    movieDescription: ['', [Validators.required, Validators.minLength(20)]],
    movieTrailer: [
      '',
      [
        Validators.required,
        // Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
  });

  movieList;
  // DI - Dependency Injection
  constructor(
    private movieService: MovieService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movieList = movieService.getMovieList();
  }

  get movieName() {
    return this.movieForm?.get('movieName');
  }

  get movieRating() {
    return this.movieForm?.get('movieRating');
  }

  get movieImage() {
    return this.movieForm?.get('movieImage');
  }

  get movieDescription() {
    return this.movieForm?.get('movieDescription');
  }

  get movieTrailer() {
    return this.movieForm?.get('movieTrailer');
  }

  addMovie() {
    console.log('New Movie Added');

    if (this.movieForm.valid) {
      const newMovie = this.movieForm.value;
      console.log(newMovie);
      // this.movieService.setMovieList(newMovie as Movie);
      this.movieService.createMovie(newMovie as Movie).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    }
  }
}
