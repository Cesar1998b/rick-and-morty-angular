import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Episodes } from '../model/episodes.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  api = environment.api;

  constructor(private http: HttpClient) {}

  getAllEpisodes() {
    return this.http.get<Episodes[]>(`${this.api}/episode`);
  }

  getEpisodesPerPage(page: number) {
    return this.http.get<Episodes[]>(`${this.api}/episode?page=${page}`);
  }
}
