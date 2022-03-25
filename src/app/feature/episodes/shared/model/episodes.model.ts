import { Character } from './../../../character/shared/model/character.model';
export interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  url: string;
  created: Date;
}
