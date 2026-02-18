import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CustomHeader } from '../../src/Components/CustomHeader';

describe('<CustomHeader/>', () => {
	
    const title = 'Esto es un texto de prueba';
	const description = 'Esto es una descripcion de prueba';

	test('Should render the title correctly', () => {
		const { container } = render(<CustomHeader title={title} />);
		// screen.debug();

		const titleRendered = container.querySelector('h1');
		expect(titleRendered?.innerHTML).toBe(title);
	});

	test('Should render the description when provide', () => {
		const { container } = render(
			<CustomHeader title={title} description={description} />
		);
		// screen.debug();

		const descriptionRendered = container.querySelector('p');
		expect(descriptionRendered?.innerHTML).toBe(description);
	});

	test('Should not render description when not provide', () => {
		const { container } = render(<CustomHeader title={title} />);
		// screen.debug();

		const descriptionRendered = container.querySelector('p');
		expect(descriptionRendered?.innerHTML).not.toBeDefined();
	});
});
