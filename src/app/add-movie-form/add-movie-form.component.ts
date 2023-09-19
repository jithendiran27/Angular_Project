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
    // const newMovie=this.moviesList.value


  
    console.log("adding...")
  }
  
}
