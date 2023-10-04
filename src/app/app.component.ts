import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo/photo.service';

import { Image } from '../interfaces/Image';

import { loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  constructor() {}

  ngOnInit() {
    this.generateListOfPhotos(5000);
    // this.getListOfPhotos(4000);
  }

  generateListOfPhotos(limit: number) {
    for (let i = 1; i <= limit; i++) {
      const formattedImage: Image = {
        id: i,
        photo: `https://picsum.photos/500/500?random=${i}`,
        text: loremIpsum(),
        loaded: true,
      };
      this.images.push(formattedImage);
    }
  }
}
