import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo/photo.service';

import { Image } from '../interfaces/Image';
import { ResponseImage } from '../interfaces/ResponseImage';
import { loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.generateListOfPhotos(100);
    // this.getListOfPhotos(4000);
  }

  generateListOfPhotos(limit: number) {
    for (let i = 1; i <= limit; i++) {
      const formattedImage: Image = {
        id: i,
        photo: `https://picsum.photos/500/500?random=${i}`,
        text: loremIpsum(),
      };
      this.images.push(formattedImage);
    }
  }

  getListOfPhotos(limit: number) {
    this.photoService.getList(limit).subscribe((res: any) => {
      for (const image of res) {
        const formattedImage: Image = {
          id: image.id,
          photo: image.download_url,
          text: image.author,
        };
        this.images.push(formattedImage);
      }
      console.log('Res: ', res);
    });
  }

  getSinglePhoto(id: number) {
    this.photoService.getPhoto(1).subscribe((res: any) => {
      const formattedImage: Image = {
        id: res.id,
        photo: res.download_url,
        text: res.author,
      };
      this.images.push(formattedImage);
    });
  }
}
