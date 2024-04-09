import express from 'express';
import { pathToResource } from './mock';
/* I den här filen ska du skriva din serverapplikation! */

// Döp om till något som passar ditt API.
export interface Entity {
  id: string | number;
  name: string;
  category: string;
  fields: string[];
  subject: string;
  level: string;
  price: { amount: number; currency: string };
  ratings: number;
  language: string;
}

let allCourses: Entity[] = [
  {
    id: '1',
    name: 'JavaScript - The Complete Guide',
    category: 'Development',
    fields: [
      'Programming Language',
      'Web Development',
      'Front End Development',
    ],
    subject: 'JavaScript',
    level: 'Beginner',
    price: { amount: 50, currency: 'EUR' },
    ratings: 4,
    language: 'EN',
  },
  {
    id: '2',
    name: 'Android Development Crash Course',
    category: 'Development',
    fields: ['Programming Language', 'Android', 'Mobile Development'],
    subject: 'Kotlin',
    level: 'Beginner',
    price: { amount: 45, currency: 'EUR' },
    ratings: 5,
    language: 'EN',
  },
  {
    id: '3',
    name: 'TypeScript - The Practical Guide',
    category: 'Development',
    fields: [
      'Programming language',
      'Web Development',
      'Front End Development',
    ],
    subject: 'TypeScript',
    level: 'Beginner',
    price: { amount: 20, currency: 'EUR' },
    ratings: 3,
    language: 'EN',
  },
  {
    id: '4',
    name: 'Next.js - Bootcamp Course',
    category: 'Development',
    fields: ['Web Development', 'Front End Development'],
    subject: 'Next.js',
    level: 'Intermediate',
    price: { amount: 35, currency: 'EUR' },
    ratings: 4,
    language: 'EN',
  },
  {
    id: '5',
    name: 'Intro to Accounting and Financing',
    category: 'Finance & Accounting',
    fields: ['Accounting', 'Finance', 'Bookkeeping'],
    subject: 'Accounting & Financing',
    level: 'Beginner',
    price: { amount: 450, currency: 'SEK' },
    ratings: 4,
    language: 'SV',
  },
  {
    id: '6',
    name: 'Bookkeeping Basics Explained',
    category: 'Finance & Accounting',
    fields: ['Accounting', 'Finance', 'Bookkeeping'],
    subject: 'Bookkeeping',
    level: 'Beginner',
    price: { amount: 500, currency: 'SEK' },
    ratings: 4,
    language: 'SV',
  },
  {
    id: 7,
    name: 'User Experience (UX) - The Complete Guide',
    category: 'Design',
    fields: ['Graphic Design', 'Web Design', 'User Experience Design'],
    subject: 'User Experience',
    level: 'Beginner',
    price: { amount: 45, currency: 'EUR' },
    ratings: 4,
    language: 'EN',
  },
  {
    id: '8',
    name: 'Figma - Essential Training',
    category: 'Design',
    fields: ['Graphic Design', 'Web Design', 'User Experience Design'],
    subject: 'Figma',
    level: 'Beginner',
    price: { amount: 45, currency: 'EUR' },
    ratings: 4,
    language: 'EN',
  },
  {
    id: '9',
    name: 'Visual Effects fot Games in Unity',
    category: 'Design',
    fields: ['Graphic Design', 'Animation', 'Game Development'],
    subject: 'Unity',
    level: 'Advanced',
    price: { amount: 45, currency: 'EUR' },
    ratings: 4,
    language: 'EN',
  },
];

export const app = express();
app.use(express.json());

app.get(pathToResource, (req, res) => {
  res.status(200).json(allCourses);
});

app.post(pathToResource, (req, res) => {
  const newId = allCourses.length + 1;
  const newCourse: Entity = {
    id: newId,
    ...req.body,
  };
  allCourses.push(newCourse);

  res.status(201).json(newCourse);
});

app.get(`${pathToResource}/:id`, (req, res) => {
  const courseId = parseInt(req.params.id);

  const findCourse = allCourses.find((course) => course.id == courseId);
  if (findCourse) {
    res.status(200).json(findCourse);
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});

app.put(`${pathToResource}/:id`, (req, res) => {
  const courseId = parseInt(req.params.id);

  const findCourseIndex = allCourses.findIndex(
    (course) => course.id == courseId
  );

  if (findCourseIndex !== -1) {
    const courseUpdated: Entity = {
      ...allCourses[findCourseIndex],
      ...req.body,
      id: courseId,
    };

    allCourses[findCourseIndex] = courseUpdated;
    res.status(200).json(courseUpdated);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

app.delete(`${pathToResource}/:id`, (req, res) => {
  const courseId = parseInt(req.params.id);

  const findIndex = allCourses.findIndex((course) => course.id == courseId);
  if (findIndex !== -1) {
    allCourses.splice(findIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});
