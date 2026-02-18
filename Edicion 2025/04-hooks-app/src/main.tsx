import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { Toaster } from 'sonner';

import './index.css';

// import { HookApp } from './HookApp';
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
// import { PokemonPage } from './03-examples/PokemonPage';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { TasksApp } from './05-useReducer/TaskApp';
// import { ScrambleWords } from './05-useReducer/ScrambleWords';
// import { MemoHook } from './06-memos/MemoHook';
// import { MemoCounter } from './06-memos/MemoCounter';
// import { InstagromApp } from './07-useOptimistic/InstagromApp';
import { ClientInformation } from './08-use-suspense/ClientInformation';
import { getUserAction } from './08-use-suspense/actions/get-user.actions';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Toaster />
		{/* <HookApp /> */}
		{/* <TrafficLight/> */}
		{/* <TrafficLightWithHook /> */}
		{/* <PokemonPage/> */}
		{/* <FocusScreen/> */}
		{/* <TasksApp/> */}
		{/* <ScrambleWords/> */}
		{/* <MemoHook/> */}
		{/* <MemoCounter/> */}
		{/* <InstagromApp /> */}

		<Suspense fallback={
			<div className='bg-gradient flex flex-col gap-4'>
				<h1 className='text-white text-4xl'>Cargando ...</h1>
			</div>
		}>
			<ClientInformation getUser={getUserAction(1001)}/>
		</Suspense>
	</StrictMode>,
);
