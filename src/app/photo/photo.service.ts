import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto(id: number) {
    return this.http.get(`https://picsum.photos/id/${id}/info`);
  }

  getList() {
    return this.http.get('https://picsum.photos/v2/list');
  }
}
