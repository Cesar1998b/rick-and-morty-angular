import { of } from 'rxjs';
import { EpisodesMock, AllEpisodesMock } from './episodes.mock';

export class EpisodesServiceMock {
  getAllEpisodes() {
    return of(AllEpisodesMock);
  }

  getEpisodesPerPage(){
    return of(EpisodesMock);
  }
}
