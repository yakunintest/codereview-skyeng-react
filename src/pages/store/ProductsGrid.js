import React from 'react';

import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.scss';
import { useProducts } from '../../hooks/useProducts';

const ProductsGrid = () => {

    const { products } = useProducts()

    return (
        <div className={styles.p__container}>
            <div className={styles.p__grid}>
                {
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}

export default ProductsGrid;
