import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { PhotoService } from './photo/photo.service';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, PhotoListComponent, SearchBarComponent],
  bootstrap: [AppComponent],
  providers: [PhotoService],
})
export class AppModule {}
