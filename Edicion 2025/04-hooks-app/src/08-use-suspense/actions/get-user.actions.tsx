export interface User {
	id: number;
	name: string;
	location: string;
	role: string;
}

export const getUserAction = async (id: number) => {
    console.log('Funcion llamada')
    
	await new Promise((res) => setTimeout(res, 2000));
    console.log('Funcion resuelta')

	return {
		id: id,
		name: 'Max Cazares',
		location: 'State of Mexico, Mexico',
		role: 'Desarrollador Web',
	};
};
