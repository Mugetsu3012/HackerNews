import { Component, OnInit } from '@angular/core';
import { ApiHackerNewsService } from '../services/api-hacker-news.service';
import { Item } from '../Item';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'new'];
  idTop: string[];
  stories: Item[];
  Data = new MatTableDataSource<Item>();

  constructor(private serviceStories: ApiHackerNewsService) {
    this.idTop = [];
    this.stories = [];
  }

  ngOnInit(): void {
    this.searchTop();
  }

  searchTop() {
    this.serviceStories.getTopStories().subscribe(x => {
      this.idTop = x;
      this.topStories();
    })
  }

  topStories(): void {
    this.idTop.forEach(e => {
      this.serviceStories.getItem(e).subscribe(x => {
        this.stories.push(x);
        this.Data.data = this.stories;
        this.Data._updateChangeSubscription();
      })
    })
  }
}