import 'reflect-metadata';

@printMetaData
class Plane {
  color: string = 'red';

  @flyDecorator('HI THERE')
  fly(): void {
    console.log('YAY FLYING PLANE');
  }
}


function flyDecorator(value: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('secret', value, target, key);
  };
}

function printMetaData(target: typeof Plane) {
  console.log('PRINTING METADATA FOR ALL METHODS');
  for (let key in target.prototype) {
    Reflect.getMetadata('secret', target.prototype, key);
  }
}


const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);

