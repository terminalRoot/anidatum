import {Component, NgModule} from '@angular/core';
import { OnInit } from "@angular/core";
import { Image } from "../shared/Image";

import { ImageService } from "../services/image.service";


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})


export class ImageComponent implements OnInit {
  images: Image[];
  selectedImage: Image;

  constructor(private  imageService: ImageService) {

  }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onSelect(image: Image){
    this.selectedImage = image;
  }

}
