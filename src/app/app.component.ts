import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo/photo.service';

interface Image {
  id: string;
  photo: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhoto(1).subscribe((res) => {
      console.log(res);
    });
  }
}
