/*
 * Hej student! I den här filen beskriver du för testerna hur ditt API ser ut.
 * Tänk på att inte ändra variabelnamnen nedan utan bara det som tilldelas.
 */

import { Entity } from './app';

// Sökvägen till resursen i ditt API:
export const pathToResource = '/api/resource';

// Beskriv hur en entitet kan se ut:
export const mockedEntityDefault: Entity = {
  id: '1',
  // string: 'new entity',
  // number: 100,
  // date: new Date('2022-01-01'),
  // list: [1, 2, 3],
};
// Ge ett annat exempel på hur en entitet kan se ut:
export const mockedEntityUpdated: Entity = {
  id: '2',
  // string: 'updated entity',
  // number: 149,
  // date: new Date('2022-12-31'),
  // list: [4, 4, 4],
};
