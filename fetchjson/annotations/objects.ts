const profile = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    address: {
        country: 'Ukraine',
        city: 'Dnipro',
    },
    setAge(age: number): void {
        this.age = age;
    },
}

const { age }: {age: number} = profile;
