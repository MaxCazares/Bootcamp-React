import { RouterProvider } from 'react-router';
import { AppRouter } from './router/app.router';
import { UserContextProvider } from './pages/context/UserContext';

export const ProfessionalApp = () => {
	return (
		<UserContextProvider>
			<div className='bg-gradient flex flex-col gap-4'>
				<RouterProvider router={AppRouter} />
			</div>
		</UserContextProvider>
	);
};
