import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Task1Component } from './User/task1.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent, pathMatch:'full'},
  {path:'users',component:Task1Component},
  {path:'movies',component:MoviesComponent},
  {path:'add-movies',component:AddMoviesComponent},
  {path:'films', redirectTo:'/movies', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
