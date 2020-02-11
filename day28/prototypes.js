

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birth = new Date(dob);
    this.calculateAge = function () {
        return Math.abs(-1970 + (
            new Date(
                Date.now() - this.birth.getTime()
            )
                .getUTCFullYear()));
    };

}


Person.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
};

const nick = new Person('Niko', 'Kole', '06-15-1992');

console.log(nick.calculateAge());
console.log(nick.greeting());

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.mebership = membership;

}

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.lastName}, welcome to new room`;
};


// At this point Customer.prototype == person.prototype, to change it we need:
Customer.prototype.constructor = Customer;
const customer = new Customer('Andy', 'Alisson', '7466776', '12-12-2012');


console.log(customer);
console.log(customer.isPrototypeOf(Person));
console.log(customer.greeting());
