import express from 'express';
import fs from 'fs/promises';
import { validationMiddleware } from './middlewares';
import { pathToResource } from './mock';
import {
  Course,
  CreateValidationSchema,
  UpdateValidationSchema,
} from './validationSchema';

export const app = express();

app.use(express.json());

async function readData() {
  try {
    const jsonData = await fs.readFile('db.json', 'utf-8');
    return JSON.parse(jsonData);
  } catch (err) {
    console.error('Read file error:', err);
    return [];
  }
}

async function writeData(data: Course[]) {
  await fs.writeFile('db.json', JSON.stringify(data, null, 2));
}

app.get(pathToResource, async (req, res) => {
  const data = await readData();
  res.status(200).json(data);
});

app.get(`${pathToResource}/:id`, async (req, res) => {
  const data = await readData();
  const courseId = req.params.id;

  const findCourse = data.find((course: Course) => course.id === courseId);
  if (findCourse) {
    res.status(200).json(findCourse);
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});

app.post(
  pathToResource,
  validationMiddleware(CreateValidationSchema),
  async (req, res) => {
    const data = await readData();
    const newCourse = {
      id: Date.now().toString(),
      ...req.body,
    };

    data.push(newCourse);
    await writeData(data);
    res.status(201).json(newCourse);
  }
);

app.put(
  `${pathToResource}/:id`,
  validationMiddleware(UpdateValidationSchema),
  async (req, res) => {
    const data = await readData();
    const courseId = req.params.id;

    if (req.body.id && req.body.id !== courseId) {
      return res
        .status(400)
        .json({ message: 'The course id cannot be changed' });
    }

    const findCourseIndex = data.findIndex(
      (course: Course) => course.id === courseId
    );

    if (findCourseIndex !== -1) {
      const courseUpdated: Course = {
        ...data[findCourseIndex],
        ...req.body,
        id: courseId,
      };
      data[findCourseIndex] = courseUpdated;
      await writeData(data);
      res.status(200).json(courseUpdated);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  }
);

app.delete(`${pathToResource}/:id`, async (req, res) => {
  const data = await readData();
  const courseId = req.params.id;

  const findIndex = data.findIndex((course: Course) => course.id === courseId);
  if (findIndex !== -1) {
    data.splice(findIndex, 1);
    await writeData(data);
    res.status(204).json(null);
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});
