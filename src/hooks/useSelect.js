import React, {useContext} from 'react';
import {SelectContext} from '../contexts/SelectContext';

export const useSelect = () => {

  const ctx = useContext(SelectContext)

  return {
    ...ctx
  }
}
