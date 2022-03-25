import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EpisodesMock, EpisodesPage2Mock } from './../mocks/episodes.mock';
import { EpisodesService } from './episodes.service';

describe('EpisodesService', () => {
  let service: EpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EpisodesService],
    });
    service = TestBed.inject(EpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllEpisodes => should be returned Episodes Array', () => {
    service.getAllEpisodes().subscribe((res: any) => {
      expect(res.results[0]).toEqual(EpisodesMock);
    });
  });

  it('getEpisodesPerPage => should be returned Episodes Array depend of page', () => {
    let page = 2;

    service.getEpisodesPerPage(page).subscribe((res: any) => {
      expect(res.results[0]).toEqual(EpisodesPage2Mock);
    });
  });
});
