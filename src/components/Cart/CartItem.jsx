import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    return (
        <div className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.details}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.price}>${item.price.toFixed(2)}</p>
                <button onClick={handleRemove} className={styles.removeButton}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;