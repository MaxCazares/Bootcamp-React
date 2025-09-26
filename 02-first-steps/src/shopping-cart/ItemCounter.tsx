import { useState } from "react";

import styles from './ItemCounter.module.css'

interface Props {
    product_name: string;
    quantity?: number;
}

export const ItemCounter = ({ product_name, quantity = 1 }: Props) => {

    const [itemCounter, setItemCounter] = useState(quantity)

    const addProduct = () => {
        setItemCounter(itemCounter + 1)
    }
    const substractProduct = () => {
        if (itemCounter !== 0)
            setItemCounter(itemCounter - 1)
    }

    return (
        <div className={styles['item-row']}>
            <h3>{product_name}</h3>

            <div className={styles.itemButtons}>
                <button onClick={addProduct}>+1</button>

                <p>{itemCounter}</p>

                <button onClick={substractProduct}>-1</button>
            </div>
        </div>
    )
};
