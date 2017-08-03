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

import { ImageService } from "./services/image.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageComponent,
    ImagedetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    FlexLayoutModule
  ],
  providers: [ ImageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
