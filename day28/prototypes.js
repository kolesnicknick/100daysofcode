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

const nick = new Person('Niko', '06-15-1992');

console.log(nick.calculateAge());