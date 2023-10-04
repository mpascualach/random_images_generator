import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ScrollingModule],
  declarations: [AppComponent, PhotoListComponent, SearchBarComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
