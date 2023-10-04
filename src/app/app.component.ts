import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo/photo.service';

import { Image } from '../interfaces/Image';
import { ResponseImage } from '../interfaces/ResponseImage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.getListOfPhotos();
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

  getListOfPhotos() {
    this.photoService.getList().subscribe((res: any) => {
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
}
