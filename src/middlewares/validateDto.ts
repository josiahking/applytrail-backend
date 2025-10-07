import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import type { Request, Response, NextFunction } from 'express';

// Use a generic <T> that extends 'object' to ensure it's a class instance.
export const validateDto = <T extends object>(DtoClass: { new (): T }) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObj = plainToInstance(DtoClass, req.body);
    const errors = await validate(dtoObj);
    if (errors.length > 0) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.map(e => e.constraints),
      });
    }
    next();
  };
};
