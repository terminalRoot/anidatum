import { Component, OnInit, Input } from '@angular/core';
import { Image } from "../shared/Image";

@Component({
  selector: 'app-imagedetail',
  templateUrl: './imagedetail.component.html',
  styleUrls: ['./imagedetail.component.scss']
})

export class ImagedetailComponent implements OnInit {

  @Input()
  image: Image;

  constructor() { }

  ngOnInit() {
  }

}
