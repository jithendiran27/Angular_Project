import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent {
movieId:string=""
movieName:string=""
movieImage:string=""
movieRating:number=0
movieDescription:string=""
movieTrailer:string=""

moviesList;
  constructor(private movieService: MovieService) {
    this.moviesList = movieService.getMovieList();
  }
  addMovie(){
    const newMovie={
      "id":this.movieId,
      "name": this.movieName,
      "poster": this.movieImage,
      "rating": this.movieRating,
      "summary": this.movieDescription,
      "trailer":this.movieTrailer
    }
    this.movieService.setMovieList(newMovie)
    console.log("adding...")
  }
  
}
