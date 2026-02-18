import { useCallback, useState } from 'react';
import { MyTitle } from './ui/MyTitle';
import { MySubTitle } from './ui/MySubTitle';

export const MemoHook = () => {
	const [title, setTitle] = useState('Hola');
	const [subtitle, setsubTitle] = useState('Mundo');

	const HandleCallAPI = useCallback(() => {
		console.log('Llamando a la API - ' + subtitle);
	}, [subtitle]);

	return (
		<div className='bg-gradient flex flex-col gap-4'>
			<h1 className='text-2xl font-thin text-white'>MemoApp</h1>

			<MyTitle title={title} />
			<MySubTitle subtitle={subtitle} callMyAPI={HandleCallAPI} />

			<p
				className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
				onClick={() => setTitle('Hello  ' + new Date().getTime())}
			>
				Cambiar titulo
			</p>
			<p
				className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
				onClick={() => setsubTitle('World ' + new Date().getTime())}
			>
				Cambiar subtitulo
			</p>
		</div>
	);
};
