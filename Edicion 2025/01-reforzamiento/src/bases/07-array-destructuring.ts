const characterNames = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = characterNames;

console.log(p3);

const returnArrayFn = () => {
	return ["ABC", 123] as const;
};

const [letras, numeros] = returnArrayFn();
console.log(numeros + 100);

const useState = (initialValue: string) => {
	const setInitialValue = (name: string) => console.log(name);
	return [initialValue, setInitialValue] as const;
};

const [name, setName] = useState("Goku");
console.log(name);
setName("Vegeta");