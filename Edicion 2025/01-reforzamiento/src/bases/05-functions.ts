function greet(name: string): string {
    return `Hola, ${name}`
}

const greet2 = (name: string): string => `Hola, ${name}`

const message = greet('Goku')
const message2 = greet2('Vegeta')

console.log(message, message2);

interface User {
    uid: string;
    username: string;
}

const getUser2 = (): User => ({
    uid: '123-abc',
    username: 'El_papi123'
})

console.log(getUser2());
