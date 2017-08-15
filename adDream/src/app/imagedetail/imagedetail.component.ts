import {Component, OnInit, Input} from '@angular/core';
import {ImageDO} from "../shared/Image";
import {ActivatedRoute, Params} from "@angular/router";
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-imagedetail',
  templateUrl: './imagedetail.component.html',
  styleUrls: ['./imagedetail.component.scss']
})

export class ImagedetailComponent implements OnInit {

  image: ImageDO;

  constructor(private imageService: ImageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.route.params.switchMap((params: Params) => this.imageService.getImage(+params['id']))
      .subscribe(image => this.image = image);
  }


}
