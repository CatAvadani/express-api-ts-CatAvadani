/*
 * Hej student! I den här filen beskriver du för testerna hur ditt API ser ut.
 * Tänk på att inte ändra variabelnamnen nedan utan bara det som tilldelas.
 */

import { Entity } from './data';

// Sökvägen till resursen i ditt API:
export const pathToResource = '/api/resource';

// Beskriv hur en entitet kan se ut:
export const mockedEntityDefault: Entity = {
  id: '1',
  name: 'Fundamentals Of JavaScript',
  category: 'Development',
  fields: ['Web Development', 'Programming Language'],
  subject: 'JavaScript',
  level: 'Beginner',
  price: { amount: 50, currency: 'EUR' },
  ratings: 5,
  language: 'EN',
};

// Ge ett annat exempel på hur en entitet kan se ut:
export const mockedEntityUpdated: Entity = {
  id: '2',
  name: 'Kotlin Development Masterclass',
  category: 'Development',
  fields: ['Programming Language', 'Mobile Development', 'Android'],
  subject: 'Kotlin',
  level: 'Beginner',
  price: { amount: 550, currency: 'SEK' },
  ratings: 4,
  language: 'SV',
};
