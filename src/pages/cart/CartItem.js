import React from 'react';
import styles from './CartItem.module.scss';


import {useCart} from '../../hooks/useCart';
import {money} from '../../helpers/utils';
import {BottomIcon, TopIcon} from '../../components/icons';
import {Link} from "react-router-dom";

const CartItem = ({product}) => {
  const min = 1;
  const max = 10;
  const {increase, decrease, removeProduct} = useCart();

  return (
    <div className={styles.itemBlock}>
      <img src={product.photo} alt={product.name}/>
      <div>
        <h5>{product.name}</h5>
        <p className={styles.itemBlock__desc}>{product.description}</p>
        <p className={styles.itemBlock__price}>{money(product.price, product.currency)} </p>
        <div className={styles.itemBlock__actions}>
          <Link to='/'>Избранные</Link>
          <Link onClick={() => removeProduct(product)}>Удалить</Link>
        </div>
      </div>
      <div className={styles.itemBlock__counter}>
        <div className={styles.counterItem}>
          <p>{product.quantity}</p>
          <div className={styles.counterItem__actions}>
            <button disabled={product.quantity === max} onClick={() => increase(product)}>
              <TopIcon width={"6px"} height={"5px"}/>
            </button>
            {
              product.quantity >= 1 &&
              <button disabled={product.quantity === min} onClick={() => decrease(product)}>
                <BottomIcon width={"6px"} height={"5px"}/>
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
