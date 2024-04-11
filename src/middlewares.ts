import { NextFunction, Request, Response } from 'express';
import { validationSchema } from './data';

export const validationProperties = [
  'name',
  'category',
  'fields',
  'price',
  'amount',
  'currency',
  'subject',
  'level',
  'ratings',
  'language',
];

export const validateProperties = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const keys = Object.keys(req.body);
  const filteredKeys = keys.filter(
    (key) => !validationProperties.includes(key)
  );

  if (filteredKeys.length > 0) {
    return res.status(400).json({
      message: 'Additional properties are not allowed',
    });
  }

  next();
};

export const validationMiddleware =
  (schema: typeof validationSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
