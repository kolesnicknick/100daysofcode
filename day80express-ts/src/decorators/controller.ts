import 'reflect-metadata';
import { AppRouter } from '../AppRouter';
import { Methods } from './Methods';
import { MetaDataKeys } from './MetaDataKeys';
import { NextFunction, Request, RequestHandler, Response } from 'express';

function bodyValidator(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request - body is missing');
      return;
    }
    keys.forEach(key => {
      if (!req.body[key]) {
        res.status(422).send(`Invalid request - body key: ${key} is missing`);
        return;
      }
    });
    next();
  };
}

export function controller(prefix: string) {
  return function (target: Function,) {
    for (let key in target.prototype) {
      const route = target.prototype[key];
      const path = Reflect.getMetadata(MetaDataKeys.PATH, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetaDataKeys.METHOD, target.prototype, key);

      console.log(`${prefix}${path}`);

      const middleware = Reflect.getMetadata(MetaDataKeys.MIDDLEWARE, target.prototype, key) || [];
      const requiredKeys = Reflect.getMetadata(MetaDataKeys.VALIDATOR, target.prototype, key) || [];
      if (requiredKeys.length > 0) middleware.push(bodyValidator(requiredKeys));
      if (path) {
        AppRouter.getInstance()[method](`${prefix}${path}`, [...middleware], route);
      }
    }
  };
}
