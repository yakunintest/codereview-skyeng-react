import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from '../../contexts/CartContext';
import styles from './header.module.scss';

const Header = () => {

  const {itemCount} = useContext(CartContext);

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.header__title} to='/'>Интерьер.</Link>
        <ul>
          <li>
            <Link to='/'>Каталог</Link>
          </li>
          <li>
            {/* counter for self */}
            <Link to='/cart'>Корзина ({itemCount})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
