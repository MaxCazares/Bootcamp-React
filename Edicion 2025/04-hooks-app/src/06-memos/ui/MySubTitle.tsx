import React from 'react';

interface Props {
	subtitle: string;
	callMyAPI: () => void;
}

export const MySubTitle = React.memo(({ subtitle, callMyAPI }: Props) => {
	console.log('MySubTitle re-render');
	return (
		<>
			<h6 className='text-xl text-white font-semibold'>{subtitle}</h6>

			<button
				className='bg-indigo-500 text-white font-bold p-2 rounded-md'
				onClick={callMyAPI}
			>
			Llamar a funcion
			</button>
		</>
	);
});
