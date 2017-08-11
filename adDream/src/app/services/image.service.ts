import { Injectable } from '@angular/core';
import { Image } from "../shared/Image";
import { IMAGES } from "../shared/images";
import {Observable} from "rxjs";

@Injectable()
export class ImageService {

  constructor() { }

  getImages() :Observable<Image[]> {
    return Observable.of(IMAGES);
  }

  getImage(id: number): Observable<Image> {
      return Observable.of(IMAGES[id - 1]);

  }
}
