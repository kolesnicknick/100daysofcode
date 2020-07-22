class Boat {
  color: string = 'red';

  @propertyDecorator
  get formattedColor(): string {
    return `Boat color is ${this.color}`;
  };

  @errorCatcher('Your boat sunk in the deep blue ocean')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}


function propertyDecorator(target: any, key: string):void {
  console.log(target);
  console.log(key);
}

function errorCatcher(errorLog: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const self = desc.value;
    desc.value = function () {
      try {
        self();
      }
      catch (e) {
        console.log(errorLog);
      }
    };
  };
}

const boat: Boat = new Boat();

boat.pilot();
