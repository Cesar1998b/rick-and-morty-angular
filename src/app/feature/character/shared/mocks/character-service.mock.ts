import { of } from 'rxjs';
import {
  CharacterMock,
  AllCharactersMock,
  LocationMock,
} from './character.mock';

export class CharacterServiceMock {
  getAllCharacters() {
    return of(AllCharactersMock);
  }

  getCharactersPerPage() {
    return of(CharacterMock);
  }

  getLocation(id: string) {
    if (id !== '') {
      return of(LocationMock);
    }else{
      return of(false);
    }
  }
}
