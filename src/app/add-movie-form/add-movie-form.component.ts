import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent {

  movieName:string=""
movieImage=""
movieRating:number=0
movieDescription:string=""

moviesList;
  constructor(movieService: MovieService) {
    this.moviesList = movieService.movies;
  }
  addMovie(){
    const movie={
      "name": this.movieName,
      "poster": this.movieImage,
      "rating": this.movieRating,
      "summary": this.movieDescription
    }
    this.moviesList.push(movie)
    console.log("adding...")
  }
}
