import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../shared/services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-place-character',
  templateUrl: './place-character.component.html',
  styleUrls: ['./place-character.component.scss']
})
export class PlaceCharacterComponent implements OnInit {

  location: Observable<any>;

  constructor(private service: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.location = this.service.getLocation(params.url)
    })
  }
}
