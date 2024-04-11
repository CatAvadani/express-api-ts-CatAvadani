import express from 'express';
import fs from 'fs/promises';
import { Entity, validationSchema } from './data';
import { validateProperties, validationMiddleware } from './middlewares';
import { pathToResource } from './mock';

export const app = express();

app.use(express.json());

// const file = fs.readFileSync('db.json', 'utf-8');
// const data = JSON.parse(file);

async function readData() {
  try {
    const file = await fs.readFile('db.json', 'utf-8');
    return JSON.parse(file);
  } catch (err) {
    console.error('Read file error:', err);
    return [];
  }
}

app.get(pathToResource, async (req, res) => {
  const data = await readData();
  res.status(200).json(data);
});

app.get(`${pathToResource}/:id`, async (req, res) => {
  const data = await readData();
  const courseId = req.params.id;

  const findCourse = data.find((course: Entity) => course.id === courseId);
  if (findCourse) {
    res.status(200).json(findCourse);
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});

app.post(
  pathToResource,
  validateProperties,
  validationMiddleware(validationSchema),
  async (req, res) => {
    const data = await readData();
    const newCourse: Entity = {
      id: Date.now().toString(),
      ...req.body,
    };

    data.push(newCourse);
    await fs.writeFile('db.json', JSON.stringify(data, null, 2));
    res.status(201).json(newCourse);
  }
);

app.put(
  `${pathToResource}/:id`,
  validationMiddleware(validationSchema),
  async (req, res) => {
    const data = await readData();
    const courseId = req.params.id;

    if (req.body.id && req.body.id !== courseId) {
      return res
        .status(400)
        .json({ message: 'The course id cannot be changed' });
    }

    const findCourseIndex = data.findIndex(
      (course: Entity) => course.id === courseId
    );

    if (findCourseIndex !== -1) {
      const courseUpdated: Entity = {
        ...data[findCourseIndex],
        ...req.body,
        id: courseId,
      };
      data[findCourseIndex] = courseUpdated;
      await fs.writeFile('db.json', JSON.stringify(data, null, 2));
      res.status(200).json(courseUpdated);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  }
);

app.delete(`${pathToResource}/:id`, async (req, res) => {
  const data = await readData();
  const courseId = req.params.id;

  const findIndex = data.findIndex((course: Entity) => course.id === courseId);
  if (findIndex !== -1) {
    data.splice(findIndex, 1);
    await fs.writeFile('db.json', JSON.stringify(data, null, 2));
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});

app.use('*', (req, res) => {
  res.status(404).json('Url not found');
});
