import * as Yup from 'yup';
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

// 1. Define a validation schema
// 2. Create a middleware

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter the course name.'),
  category: Yup.string().required('Please enter the category.'),
  fields: Yup.array().of(Yup.string()).required('Please enter the fields.'),
  subject: Yup.string().required('Please enter the course subject.'),
  level: Yup.string().required('Please enter the level of the course.'),
  price: Yup.object()
    .shape({
      amount: Yup.number()
        .positive('Amount must be a positive number.')
        .required('The amount is required.'),
      currency: Yup.string().required('The currency is required'),
    })
    .required('Please enter the course price.'),
  ratings: Yup.number()
    .positive('Ratings must be a positive number.')
    .required('Please enter the course ratings.'),
  language: Yup.string().required('Please enter the language.'),
});

export const allCourses: Entity[] = [
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