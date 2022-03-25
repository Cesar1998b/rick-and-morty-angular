import { Component, OnInit } from '@angular/core';
import { Location } from '../../shared/model/character.model';
import { CharacterService } from '../../shared/services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-place-character',
  templateUrl: './place-character.component.html',
  styleUrls: ['./place-character.component.scss']
})
export class PlaceCharacterComponent implements OnInit {

  location: Observable<any> | undefined;

  constructor(private service: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.location = this.service.getLocation(params.url)
    })
  }
}
