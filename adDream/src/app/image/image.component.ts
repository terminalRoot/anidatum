import {Component, NgModule} from '@angular/core';
import { OnInit } from "@angular/core";
import { Image } from "../shared/Image";
import { IMAGES } from "../shared/images";


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})


export class ImageComponent implements OnInit {
  images: Image[] = IMAGES;
  selectedImage: Image;

  constructor() { }

  ngOnInit() {

  }

  onSelect(image: Image){
    this.selectedImage = image;
  }

}
