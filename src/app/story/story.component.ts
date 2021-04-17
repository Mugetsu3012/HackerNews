import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiHackerNewsService } from '../services/api-hacker-news.service';
import { Item } from '../Item';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'new'];
  idTop: string[];
  stories: Item[];
  length: number; 
  Data = new MatTableDataSource<Item>();
  @ViewChild(MatSort, ) sort: MatSort;
  @ViewChild(MatPaginator, ) paginator: MatPaginator;
  
  constructor(private serviceStories: ApiHackerNewsService) {
    this.idTop = [];
    this.stories = [];
  }
  
  ngAfterViewInit() {
    this.paginator.showFirstLastButtons = true;
    this.Data.paginator = this.paginator;
    this.Data.data = this.stories;
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
    this.length = this.idTop.length;
    this.idTop.forEach(e => {
      this.serviceStories.getItem(e).subscribe(x => {
        this.stories.push(x);
        this.Data.data = this.stories;
        this.Data._updateChangeSubscription();
      })
    })
  }
}