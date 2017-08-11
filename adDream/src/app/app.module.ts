import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdButtonModule} from "@angular/material";
import { MdGridListModule } from "@angular/material";
import { MdCardModule } from "@angular/material"
import { FlexLayoutModule } from "@angular/flex-layout";

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ImageComponent } from './image/image.component';
import { ImagedetailComponent } from './imagedetail/imagedetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AudioComponent } from './audio/audio.component';
import { MovieComponent } from './movie/movie.component';

import { ImageService } from "./services/image.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AnnotatorComponent } from './annotator/annotator.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageComponent,
    ImagedetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AudioComponent,
    MovieComponent,
    AnnotatorComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [ ImageService ],
  entryComponents: [AnnotatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
