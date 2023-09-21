import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MovieComponent,
    MoviesComponent,
    AddMoviesComponent,
    AddMovieFormComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class MovieModule {}
