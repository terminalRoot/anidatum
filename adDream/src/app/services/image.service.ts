import { Injectable } from '@angular/core';
import { ImageDO } from "../shared/Image";
import { IMAGES } from "../shared/images";
import {Observable} from "rxjs";

@Injectable()
export class ImageService {

  constructor() { }

  getImages() :Observable<ImageDO[]> {
    return Observable.of(IMAGES);
  }

  getImage(id: number): Observable<ImageDO> {
      return Observable.of(IMAGES[id - 1]);

  }
}
