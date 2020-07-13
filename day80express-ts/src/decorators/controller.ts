import 'reflect-metadata';
import { AppRouter } from '../AppRouter';

export function controller(prefix: string) {
  return function (target: Function,) {
    for (let key in target.prototype) {
      const route = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      console.log(`${prefix}${path}`);

      if (path) {
        AppRouter.getInstance().get(`${prefix}${path}`, route);
      }
    }
  };
}
