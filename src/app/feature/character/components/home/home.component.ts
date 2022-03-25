import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../shared/services/character.service';
import { Character } from './../../shared/model/character.model';
import { Episodes } from '../../../episodes/shared/model/episodes.model';

const REGION_OPTIONS = ['All', 'Human', 'Alien', 'Mythological Creature', 'Poopybutthole', 'unknown', 'Humanoid','Animal','Robot','Disease','Cronenberg'];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  episode: Episodes[] = [];
  characters :Character[] = [];
  page: number = 1;
  actualPage: number = 1;
  pageSize: number = 0;
  totalItems: number = 0;
  regionFilter: string = '';
  regionOptions = REGION_OPTIONS;


  constructor(private service: CharacterService) {}

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe((res: any) => {
      this.characters = res.results;
      this.pageSize = res.info.pages;
      this.totalItems = res.info.count;
      this.characters.forEach((character: any) => {
        this.service
          .getFirstEpisode(character.episode[0])
          .subscribe((episode: any) => {
            character.firstEpisode = episode.name;
          });
      });
    });
  }

  loadNextPage() {
    let getOffset = (this.page - 1) + 1;
    this.service.getCharactersPerPage(getOffset).subscribe((res: any) => {
      this.characters = res.results;
      this.characters.forEach((character: any) => {
        this.service
          .getFirstEpisode(character.episode[0])
          .subscribe((episode: any) => {
            character.firstEpisode = episode.name;
          });
      });
    });
  }
}
