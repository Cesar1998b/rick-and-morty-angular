export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
  firstEpisode: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  url: string;
  created: Date;
}

export interface Result {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
