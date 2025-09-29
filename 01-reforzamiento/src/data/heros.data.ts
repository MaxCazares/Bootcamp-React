export interface Hero {
	id: number;
	name: string;
	owner: Owner;
}

// type Owner = "Marvel" | "DC";
export enum Owner {
    Marvel = 'Marvel',
    DC = 'DC'
}

// Interfaces and type do not generate javascript code
// Enum do generate javascrispt code

export const Heroes: Hero[] = [
	{
		id: 1,
		name: "Batman",
		owner: Owner.DC,
	},
	{
		id: 2,
		name: "Spiderman",
		owner: Owner.Marvel,
	},
	{
		id: 3,
		name: "Superman",
		owner: Owner.DC,
	},
	{
		id: 4,
		name: "Flash",
		owner: Owner.DC,
	},
	{
		id: 5,
		name: "Wolverine",
		owner: Owner.Marvel,
	},
];
