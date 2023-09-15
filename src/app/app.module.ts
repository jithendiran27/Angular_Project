import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './User/task1.component';
import { MoviesComponent } from './movies/movies.component';
import { CounterComponent } from './counter/counter.component';
import { DynamicColorComponent } from './dynamic-color/dynamic-color.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { FormsModule } from '@angular/forms';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    MoviesComponent,
    CounterComponent,
    DynamicColorComponent,
    ColorBoxComponent,
    AddMoviesComponent,
    WelcomeComponent,
    AddMovieFormComponent,
    MovieDetailsComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
