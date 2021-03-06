import {Routes} from "@angular/router";

import {ImageComponent} from '../image/image.component';
import {HomeComponent} from '../home/home.component';
import {AudioComponent} from '../audio/audio.component';
import {MovieComponent} from '../movie/movie.component';
import {AnnotatorComponent} from "../annotator/annotator.component";


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
  },
  {
    path: 'images/:id', component: AnnotatorComponent
  }
];

