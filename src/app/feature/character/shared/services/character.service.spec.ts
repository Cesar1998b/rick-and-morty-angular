import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharacterService } from './character.service';
import { EpisodesMock } from '../../../episodes/shared/mocks/episodes.mock';
import { CharacterMock, CharacterPage2Mock, LocationMock } from './../mocks/character.mock';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService],
    });
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllCharacters => should be returned Character Array', () => {
    service.getAllCharacters().subscribe((res: any) => {
      expect(res.results[0]).toEqual(CharacterMock);
    });
  });

  it('getCharacterPerPage => should be returned Character Array depend of page', () => {
    let page = 2;

    service.getCharactersPerPage(page).subscribe((res: any) => {
      expect(res.results[0]).toEqual(CharacterPage2Mock);
    });
  });

  it('getLocation => should be returned Location Array', () => {
    let id = '1';

    service.getLocation(id).subscribe((res: any) => {
      expect(res).toEqual(LocationMock);
    });
  });

  it('getFirstEpisode => should be returned Location Array', () => {
    let url = 'https://rickandmortyapi.com/api/episode/1';

    service.getFirstEpisode(url).subscribe((res: any) => {
      expect(res).toEqual(EpisodesMock);
    });
  });
});
