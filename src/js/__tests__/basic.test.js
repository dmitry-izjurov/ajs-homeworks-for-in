import orderByProps from '../basic';

test('Массив должен быть отсортирован', () => {
  const unit = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const arg = ['name', 'level'];

  expect(orderByProps(unit, arg)).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
