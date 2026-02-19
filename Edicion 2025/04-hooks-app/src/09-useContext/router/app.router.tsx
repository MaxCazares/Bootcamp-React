import { createBrowserRouter, Navigate } from 'react-router';
import { AboutPage } from '../pages/about/AboutPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/',
		element: <AboutPage />,
	},
	{
		path: '/profile',
		element: <PrivateRoute element={<ProfilePage />} />,
	},
	{
		path: '*',
		element: <Navigate to={'/'} />,
	},
]);
