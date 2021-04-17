import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
// import { ApiHackerNewsService } from './services/api-hacker-news.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    // ApiHackerNewsService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
