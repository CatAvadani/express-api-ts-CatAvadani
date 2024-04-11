import express from 'express';
import fs from 'fs';
import { Entity, validationSchema } from './data';
import { validateProperties, validationMiddleware } from './middlewares';
import { pathToResource } from './mock';

export const app = express();

app.use(express.json());

const file = fs.readFileSync('db.json', 'utf-8');
const data = JSON.parse(file);

app.get(pathToResource, (req, res) => {
  res.status(200).json(data);
});

app.get(`${pathToResource}/:id`, (req, res) => {
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
  (req, res) => {
    const newCourse: Entity = {
      id: Date.now().toString(),
      ...req.body,
    };
    data.push(newCourse);
    res.status(201).json(newCourse);
  }
);

app.put(
  `${pathToResource}/:id`,
  validationMiddleware(validationSchema),
  (req, res) => {
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
      res.status(200).json(courseUpdated);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  }
);

app.delete(`${pathToResource}/:id`, (req, res) => {
  const courseId = req.params.id;

  const findIndex = data.findIndex((course: Entity) => course.id === courseId);
  if (findIndex !== -1) {
    data.splice(findIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});

app.use('*', (req, res) => {
  res.status(404).json('Url not found');
});
