import { Component, OnInit, Input, Output } from '@angular/core';
import { Character } from '../../shared/model/character.model';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  @Input() character: Character | undefined;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.character);
  }

}
