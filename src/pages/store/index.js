import React, { useState } from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';
import { useSelect } from "../../hooks/useSelect";
import { useProducts } from "../../hooks/useProducts";

import styles from './Select.module.scss';

const Store = () => {
  const [selected, setSelected] = useState();

  const {options} = useSelect();

  const {sort} = useProducts();

  const handleChange = (evt) => {
    setSelected(evt.target.value);
    sort(evt.target.value);
  };

  return (
    <Layout title="Store" description="This is the Store page">
      <>
        <div className={styles.select}>
          <select
            onChange={(e) => handleChange(e)}
            value={selected} multiple={false}
          >
            {options.map((item, i) => {
              return (<option value={item.value} key={i}>{item.label}</option>)
            })}
          </select>
        </div>
        <ProductsGrid/>
      </>
    </Layout>
  );
}

export default Store;
