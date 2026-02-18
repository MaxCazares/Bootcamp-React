import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
	product_name: string;
	quantity: number;
}

const ItemsInCart: ItemInCart[] = [
	{ product_name: 'Cuerdas para bajo', quantity: 5 },
	{ product_name: 'Pedal Fuzz para bajo', quantity: 3 },
	{ product_name: 'Funda semirigida para bajo', quantity: 6 },
];

export const FirstStepsApp = () => {
	return (
		<div>
			{ItemsInCart.map(({ product_name, quantity }) => (
				<ItemCounter
					key={product_name}
					product_name={product_name}
					quantity={quantity}
				/>
			))}
		</div>
	);
};
