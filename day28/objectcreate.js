
const personPrototypes = {
  greeting: function () {
    return `hello there ${this.firstName} ${this.lastName}`
  },

  getsMarried: function (nLastName) {
    this.lastName = nLastName;
  }
};

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
mary.getsMarried('Thompson');

console.log(personPrototypes.greeting());
console.log(mary.greeting());


const brad = Object.create(personPrototypes, {
   firstName: {value: 'Niko'},
   lastName: {value: 'Kolesnikus'},
   age: {value: 27},
});

console.log(brad.greeting());
