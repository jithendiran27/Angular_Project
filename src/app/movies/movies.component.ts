import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
@Input() movie={
  "id":"",
  "name": "Vikram",
  "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  "rating": 8.4,
  "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
  "trailer":""
}
@Input() movieName="";

count=0;
  increment(){
    console.log("incrementing")
    this.count++

  }
  dcount=0;
  decrement(){
    console.log("decrementing")
    this.dcount++
  }
  show=true;
  toggleSummary(){
    this.show = !this.show
  }
  constructor(private router:Router){

  }
  movieDetailsPage(){
     this.router.navigate(['/movies',this.movie.id])
  }
}
