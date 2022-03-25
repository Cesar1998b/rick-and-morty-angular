import { Component, OnInit, Input } from '@angular/core';
import { Episodes } from '../../shared/model/episodes.model';

@Component({
  selector: 'app-card-episodes',
  templateUrl: './card-episodes.component.html',
  styleUrls: ['./card-episodes.component.scss']
})
export class CardEpisodesComponent implements OnInit {

  @Input() episode: Episodes | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
