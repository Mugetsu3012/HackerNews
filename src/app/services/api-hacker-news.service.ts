import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHackerNewsService {

  constructor( private http: HttpClient) { 

  }

  getTopStories(): Observable <any> {
    const apiUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    return this.http.get(apiUrl) ;
  }
  
  getItem(idTop: string): Observable <any>{
    const UrlStory = 'https://hacker-news.firebaseio.com/v0/item/' + idTop + '.json?print=pretty';
    return this.http.get(UrlStory);
  }
  

}
