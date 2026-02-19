import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { Link } from 'react-router';
import { UserContext } from '../context/UserContext';

export const AboutPage = () => {
	const { isAuthenticated, logout } = useContext(UserContext);

	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h1 className='text-4xl font-bold'>Página sobre mi</h1>
			<hr />

			<div className='flex flex-col gap-2 justify-center mt-5'>
				{isAuthenticated && (
					<Link to='/profile'>
						<Button variant='ghost'>Perfil</Button>
					</Link>
				)}

				{isAuthenticated ? (
					<Button variant='destructive' onClick={logout}>
						Salir
					</Button>
				) : (
					<Link to='/login'>
						<Button variant='ghost'>Iniciar Sesion</Button>
					</Link>
				)}
			</div>
		</div>
	);
};
