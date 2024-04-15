import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validationMiddleware =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
