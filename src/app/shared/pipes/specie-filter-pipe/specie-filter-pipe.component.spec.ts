import { SelectPipe } from './specie-filter-pipe.component';

describe('FilterUserByNamePipe', () => {

  let filterPipe: SelectPipe;

  beforeEach(() => {
    filterPipe = new SelectPipe();
  });

  it('create an instance', () => {
    expect(filterPipe).toBeDefined();
  });

  it('should return an empty array if it has no matches', () => {
    const items: [] = [];

    const filtro = filterPipe.transform(items, 'status');

    expect(filtro.length).toBe(0);
    expect(filtro).toEqual([]);
  });

  it('Should return items if no field is provided', () => {
    const items = [];
    items.push({ id: 1, status: 'Alive' });

    const filtered = filterPipe.transform(items, '');

    expect(filtered).toEqual(items);
  });

  it('should return the filter correctly', () => {
    const items = [];

    items.push({ id: 1, status: 'Alive' });
    items.push({ id: 2, status: 'Dead' });
    items.push({ id: 3, status: 'unknown' });
    items.push({ id: 4, status: 'Alives' });

    const filtered = filterPipe.transform(items, 'Alive');

    expect(filtered.length).toBe(1);
  });

});
