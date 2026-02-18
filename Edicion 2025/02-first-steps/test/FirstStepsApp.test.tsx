import { afterEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FirstStepsApp } from '../src/FirstStepsApp';

const mockItemCounter = vi.fn((props: unknown) => {
	return <div data-testid='ItemCounter'>ItemCounter</div>;
});

vi.mock('../src/shopping-cart/ItemCounter', () => ({
	ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('Pruebas en FirstStepsApp', () => {
	afterEach(() => vi.clearAllMocks());

	// test('Se debe de renderizar correctamente', () => {
	// 	const { container } = render(<FirstStepsApp />);
	// 	// screen.debug();

	// 	const h3 = container.querySelector('h3');
	// 	expect(h3?.innerHTML).toContain('Cuerdas para bajo');
	// });

	// test('Se debe de renderizar correctamente - screen', () => {
	// 	render(<FirstStepsApp />);
	// 	// screen.debug();

	// 	const h3 = screen.getAllByTestId('product_title');
	// 	h3.forEach((element) => {
	// 		expect(element.innerHTML).toContain('bajo');
	// 	});
	// });

	// test('Evaluado el snapshot del componente', () => {
	// 	const { container } = render(<FirstStepsApp />);

	// 	expect(container).toMatchSnapshot();
	// });

	test('Should render the correct number of ItemCounter components', () => {
		render(<FirstStepsApp />);

		const ItemCounters = screen.getAllByTestId('ItemCounter');
		expect(ItemCounters.length).toBe(3);
	});

	test('Should render ItemCounter with correct props', () => {
		render(<FirstStepsApp />);

		expect(mockItemCounter).toHaveBeenCalledTimes(3);
		expect(mockItemCounter).toHaveBeenCalledWith({
			'product_name': 'Pedal Fuzz para bajo',
			'quantity': 3
		});

	});
});
