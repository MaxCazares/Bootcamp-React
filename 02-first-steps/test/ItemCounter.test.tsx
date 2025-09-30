import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { ItemCounter } from '../src/shopping-cart/ItemCounter';

describe('ItemCounter', () => {
	test('Should render with default values', () => {
		const product = 'Correa de seguridad para bajo';

		render(<ItemCounter product_name={product} />);
		// screen.debug();

		expect(screen.getByText(product)).toBeDefined();
		expect(screen.getByText(product)).not.toBeNull();
	});
	test('Should render with custom quantity', () => {
		const product = 'Correa de seguridad para bajo';
		const qty = 50;

		const { container } = render(
			<ItemCounter product_name={product} quantity={qty} />
		);
		// screen.debug();

		const qtyHMTL = container.querySelector('p');
		expect(qtyHMTL?.innerHTML).toEqual(qty.toString());
	});
	test('should increase count when +1 button is clicked', () => {
		const qty = 2;
		const { container } = render(
			<ItemCounter product_name={'test product'} quantity={qty} />
		);

		const [buttonAdd] = screen.getAllByRole('button');
		fireEvent.click(buttonAdd);

		const qtyHMTL = container.querySelector('p');
		expect(qtyHMTL?.innerHTML).toEqual((qty + 1).toString());
	});
	test('should decreased count when -1 button is clicked', () => {
		const qty = 5;
		const { container } = render(
			<ItemCounter product_name={'test product'} quantity={qty} />
		);

		const [, buttonSubstract] = screen.getAllByRole('button');
		fireEvent.click(buttonSubstract);

		const qtyHMTL = container.querySelector('p');
		expect(qtyHMTL?.innerHTML).toEqual((qty - 1).toString());
	});
	test('should decreased count when -1 button is clicked and qty is 1', () => {
		const { container } = render(
			<ItemCounter product_name={'test product'} quantity={1} />
		);

		const [, buttonSubstract] = screen.getAllByRole('button');
		fireEvent.click(buttonSubstract);

		const qtyHMTL = container.querySelector('p');
		expect(qtyHMTL?.innerHTML).toBe((0).toString());
	});
	test('Should change color to red when quantity is 1', () => {
		const { container } = render(
			<ItemCounter product_name={'test product'} quantity={1} />
		);

		const h3 = container.querySelector('h3');
		expect(h3?.style.color).toBe('red');
	});
	test('Should change color to blue when quantity is greater than 1', () => {
		const { container } = render(
			<ItemCounter product_name={'test product'} quantity={5} />
		);

		const h3 = container.querySelector('h3');
		expect(h3?.style.color).toBe('blue');
	});
});
