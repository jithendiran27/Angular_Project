import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [
  { path: '', component: AddMoviesComponent, pathMatch: 'full' },
  // { path: 'movies', component: AddMoviesComponent },
  { path: 'add', component: AddMovieFormComponent },
  { path: ':id', component: MovieDetailsComponent },
  { path: 'edit/:id', component: EditMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
