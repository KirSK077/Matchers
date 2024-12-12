import { sortHeroes } from './sortHeroes';

describe('sortHeroes', () => {
  it('Вернет список героев, отсортированный в убывающем порядке', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedHeroes = sortHeroes(heroes);

    expect(sortedHeroes).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  it('Вернет пустой список, если в списке нет героев', () => {
    const heroes = [];
    const sortedHeroes = sortHeroes(heroes);
    expect(sortedHeroes).toEqual([]);
  });
});