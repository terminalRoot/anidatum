import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { ImageComponent } from '../image/image.component';
import { ImagedetailComponent } from '../imagedetail/imagedetail.component';
import { HomeComponent } from '../home/home.component';
import { AudioComponent } from '../audio/audio.component';
import { MovieComponent } from '../movie/movie.component';


export const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'image', component: ImageComponent
  },
  {
    path: 'audio', component: AudioComponent
  },
  {
    path: 'movie', component: MovieComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

