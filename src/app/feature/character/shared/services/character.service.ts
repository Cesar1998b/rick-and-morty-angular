import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Character, Location } from '../../shared/model/character.model';
import { Episodes } from 'src/app/feature/episodes/shared/model/episodes.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  api = environment.api;

  constructor(private http: HttpClient) {}

  getAllCharacters() {
    return this.http.get<Character[]>(`${this.api}/character`);
  }

  getFirstEpisode(url: string) {
    return this.http.get<Episodes[]>(url);
  }

  getLocation(id: string) {
    return this.http.get<Location[]>(`${this.api}/location/${id}`);
  }

  getCharactersPerPage(page: number) {
    console.log();
    return this.http.get<Character[]>(`${this.api}/character?page=${page}`);
  }
}
