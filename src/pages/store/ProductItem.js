import React from 'react';
import styles from './ProductItem.module.scss';

import {useCart} from '../../hooks/useCart';
import {money} from '../../helpers/utils';

const ProductItem = ({product}) => {

  const {addProduct, cartItems, increase} = useCart();

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id);
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__actions}>
        <img className={styles.card__img} src={product.photo + '?v=' + product.id} alt={product.description}/>
        {
          !isInCart(product) &&
          <span role="img" className={styles.card__cart} onClick={() => addProduct(product)}/>
        }
        {
          isInCart(product) &&
          <span role="img" className={styles.card__cart} onClick={() => increase(product)}/>
        }
        <span role="img" className={styles.card__wishlist}/>
      </div>
      <p className={styles.card__title}>{product.name}</p>
      <p className={styles.card__desc}>{product.description}</p>
      <h3 className={styles.card__price}>{money(product.price, product.currency)}</h3>
    </div>
  );
}

export default ProductItem;
