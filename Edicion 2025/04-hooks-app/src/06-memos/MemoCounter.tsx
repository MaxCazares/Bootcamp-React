import { useCounter } from '@/Hooks/useCounter';
import { useMemo } from 'react';

const heavyStuff = (iterationNumber: number) => {
	console.time('heavy_stuff_started');

	for (let i = 0; i < iterationNumber; i++) {
		console.log('Doing something ...');
	}

	console.timeEnd('heavy_stuff_started');
    return `${iterationNumber} iteraciones realizadas`
};

export const MemoCounter = () => {
	const { counter, increment } = useCounter(40_000);
	const { counter: counter2, increment: increment2 } = useCounter(10);

	const heavyValue = useMemo(() => heavyStuff(counter), [counter]);
	// const heavyValue = heavyStuff(counter);

	return (
		<div className='bg-gradient flex flex-col gap-4'>
			<h1 className='text-2xl font-bold'>Memmo - useMemo - {heavyValue}</h1>
			<hr />

			<h4>Counter: {counter}</h4>
			<h4>Counter2: {counter2}</h4>

			<button
				className='bg-blue-500 text-white rounded-md cursor-pointer py-2 px-4'
				onClick={() => increment()}
			>
				+1
			</button>
			<button
				className='bg-blue-500 text-white rounded-md cursor-pointer py-2 px-4'
				onClick={() => increment2()}
			>
				+1 - Counter2
			</button>
		</div>
	);
};
