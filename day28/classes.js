class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

const mary = new Person('mary', 'williams');

console.log(mary);

class Customer extends Person{
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
}


const john = new Customer('Jeka', 'Alferov', '7444444', 'Admin');

console.log(john.greeting());
