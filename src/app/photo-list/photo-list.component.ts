import { Component, Input } from '@angular/core';
import { Image } from '../../interfaces/Image';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent {
  @Input() images: Image[] = [];

  constructor() {}

  onImageLoad(image: Image) {
    console.log(`Image loaded: ${image.photo}`);
  }

  onImageError(image: Image) {
    console.log(`Image failed to load: ${image.photo}`);
  }
}
