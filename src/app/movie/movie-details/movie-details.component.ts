import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  id: string = '';
  movie: any;
}
