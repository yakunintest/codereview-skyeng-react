import React from 'react';
import {Link} from 'react-router-dom';
import styles from './CartLayout.module.scss';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import {useCart} from '../../hooks/useCart';
import {money} from '../../helpers/utils';

const Cart = () => {
  // itemCount, clearCart,
  const {total, cartItems,  checkout, handleCheckout} = useCart();

  return (
    <Layout title="Cart" description="Cart page">
      <div className={styles.cart}>
        <section className={styles.cart__items}>
          <div className={styles.cart__header}>
            <span>Товар</span>
            <span>К-во</span>
          </div>
          {
            cartItems.length > 0 ?
              <CartProducts/> :
              <div>
                Your cart is empty
              </div>
          }

          {checkout &&
            <div>
              <p>Checkout successfull</p>
              <Link to="/">BUY MORE</Link>
            </div>
          }
        </section>
        <section className={styles.cart__checkout}>
          {
            cartItems.length > 0 &&
            <div className={styles.cart__checkoutForm}>
              <h3>Оформление заказа</h3>
              <form>
                <label>
                  <input placeholder="Имя Фамилия" type="text"/>
                </label>
                <label>
                  <input placeholder="+ 7 904 000 80 80" type="tel"/>
                </label>
                <label>
                  <input placeholder="Адрес доставки" type="text"/>
                </label>
                <h2>Итого: {money(total, 'руб.')}</h2>
                <div>
                  <button type="button" onClick={handleCheckout}>Оформить заказ</button>
                  {/*<button type="button" onClick={clearCart}>Очитстить</button>*/}
                </div>
              </form>
            </div>
          }
        </section>
      </div>
    </Layout>
  );
}

export default Cart;
