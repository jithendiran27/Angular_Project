import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/app.component';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent {
  id: string = '';

  movie: Movie = {
    id: '',
    name: '',
    poster: '',
    rating: 0,
    summary: '',
    trailer: '',
  };

  movieForm = this.fb.group({
    id: '',
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
  });

  // movieList;
  // DI - Dependency Injection
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {
    const { id } = this.route.snapshot.params;
    this.id = id;
  }

  ngOnInit() {
    this.movieService.getMovieById(this.id).subscribe((mv) => {
      console.log(mv);
      this.movieForm.patchValue(mv);
    });
  }

  get name() {
    return this.movieForm?.get('name');
  }

  get rating() {
    return this.movieForm?.get('rating');
  }

  get poster() {
    return this.movieForm?.get('poster');
  }

  get summary() {
    return this.movieForm?.get('summary');
  }

  get trailer() {
    return this.movieForm?.get('trailer');
  }

  editMovie() {
    console.log(this.movieForm.status);

    if (this.movieForm.valid) {
      const editedMovie = this.movieForm.value;
      console.log(editedMovie);
      // this.movieService.updateMovie(updatedMovie as Movie);

      this.movieService.editMovieById(editedMovie as Movie).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    }
  }
}
