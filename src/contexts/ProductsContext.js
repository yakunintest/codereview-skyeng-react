import React, { createContext, useReducer } from 'react';
import { dummyProducts } from '../services/dummy';
import { ProductsReducer } from "./ProductsReducer";

export const ProductsContext = createContext()

const initialState = {products: dummyProducts};

const ProductsContextProvider = ({children}) => {

  const [products, dispatch] = useReducer(ProductsReducer, initialState)

  const sort = payload => {
    dispatch({type: 'SORT', payload})
  }

  const contextValues = {
    sort,
    ...products
  }

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
