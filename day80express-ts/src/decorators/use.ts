import { MetaDataKeys } from './MetaDataKeys';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middleWares = Reflect.getMetadata(MetaDataKeys.MIDDLEWARE, target, key) || [];

    Reflect.defineMetadata(MetaDataKeys.MIDDLEWARE, [...middleWares, middleware], target, key);
  };
}
