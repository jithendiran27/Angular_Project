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

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    MoviesComponent,
    CounterComponent,
    DynamicColorComponent,
    ColorBoxComponent,
    AddMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
