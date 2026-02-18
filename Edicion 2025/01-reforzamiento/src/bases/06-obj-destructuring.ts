interface Hero {
    key: string;
    name: string;
    age: number;
    rank?: string;
}

const useContext = ({key, name, age, rank}: Hero) => {
    return {
        keyname: key,
        user: {
            name,
            age,
        },
        rank: rank
    }
}

const ironman = {
    key: 'Tony',
    name: 'Stark',
    age: 45,
}

const {keyname, user: {name}, rank} = useContext(ironman)

console.log(keyname, name, rank);
