import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart} className={styles.button}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;