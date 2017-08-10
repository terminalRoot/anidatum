import {Component, OnInit} from "@angular/core";
import {ImageService} from "../services/image.service";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-annotator',
  templateUrl: './annotator.component.html',
  styleUrls: ['./annotator.component.scss']
})
export class AnnotatorComponent implements OnInit {
  imageId: number;
  imageIds: number[];
  prev: number;
  next: number;
  editingMode: boolean = false;

  constructor(private imageService: ImageService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => this.imageIds = images.map(image => image.id));
    this.route.params.switchMap((params: Params) => this.imageService.getImage(+params['id'])).subscribe(image => {
      this.imageId = image.id;
      this.setPrevNext();
    });
  }

  private setPrevNext() {
    let index = this.imageIds.indexOf(this.imageId);
    this.prev = this.imageIds[this.mod((index - 1), this.imageIds.length)];
    this.next = this.imageIds[this.mod((index + 1), this.imageIds.length)];
  }

  mod(n: number, m: number): number {
    let mod = ((n % m) + m) % m;
    return mod;
  }

}
