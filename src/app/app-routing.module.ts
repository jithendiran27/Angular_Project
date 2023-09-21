import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Task1Component } from './User/task1.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { AddMoviesComponent } from './movie/add-movies/add-movies.component';
import { AddMovieFormComponent } from './movie/add-movie-form/add-movie-form.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'users', component: Task1Component },
  { path: 'films', redirectTo: '/movies', pathMatch: 'full' },
  // {path:'movies',component:MoviesComponent},

  {
    path: 'movies',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
    canActivate: [authGuard],
  },

  // {
  //   path: 'movie',
  //   loadChildren: () =>
  //     import('./movie/movie.module').then((m) => m.MovieModule),
  // },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
