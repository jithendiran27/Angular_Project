import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './User/task1.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { CounterComponent } from './counter/counter.component';
import { DynamicColorComponent } from './dynamic-color/dynamic-color.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMoviesComponent } from './movie/add-movies/add-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { AddMovieFormComponent } from './movie/add-movie-form/add-movie-form.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EditMovieComponent } from './movie/edit-movie/edit-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    //
    CounterComponent,
    DynamicColorComponent,
    ColorBoxComponent,
    //
    WelcomeComponent,
    EditMovieComponent,
    //
    //
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
