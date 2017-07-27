import { Injectable } from '@angular/core';
import { Image } from "../shared/Image";
import { IMAGES } from "../shared/images";

@Injectable()
export class ImageService {

  constructor() { }

  getImages() :Image[] {
    return IMAGES;
  }

}
