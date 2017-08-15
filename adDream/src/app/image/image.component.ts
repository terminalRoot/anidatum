import {Component, NgModule} from '@angular/core';
import { OnInit } from "@angular/core";
import { ImageDO } from "../shared/Image";

import { ImageService } from "../services/image.service";
import {MdDialog} from "@angular/material";


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})


export class ImageComponent implements OnInit {
  images: ImageDO[];
  selectedImage: ImageDO;

  constructor(private  imageService: ImageService) {

  }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => this.images = images);
  }

  onSelect(image: ImageDO){
    this.selectedImage = image;
  }

}
