import { Component, OnInit } from '@angular/core';
import { Episodes } from '../../shared/model/episodes.model';
import { EpisodesService } from '../../shared/services/episodes.service';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss'],
})
export class ListEpisodesComponent implements OnInit {
  episodes: Episodes[] = [];
  page: number = 1;
  actualPage: number = 1;
  pageSize: number = 0;
  totalItems: number = 0;

  constructor(private service: EpisodesService) {}

  ngOnInit(): void {
    this.service.getAllEpisodes().subscribe((res: any) => {
      this.episodes = res.results;
      this.pageSize = res.info.pages;
      this.totalItems = res.info.count;
    });
  }

  loadNextPage() {
    let getOffset = (this.page - 1) + 1;
    if(getOffset <= this.pageSize){
      this.service.getEpisodesPerPage(getOffset).subscribe((res: any) => {
        this.episodes = res.results;
      });
    }
  }
}
