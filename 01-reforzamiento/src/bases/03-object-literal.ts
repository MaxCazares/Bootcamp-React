interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address
}

interface Address {
    zipcode: number;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipcode: 23455,
        city: 'New York'
    }
}

const spiderman: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 22,
    address: {
        zipcode: 89553,
        city: 'New York'
    }
}

// const spiderman = structuredClone(ironman)
// spiderman.firstName = 'Peter'
// spiderman.lastName = 'Parker'
// spiderman.age = 22
// spiderman.address.city = 'Queretaro'

// console.log(ironman, spiderman);
