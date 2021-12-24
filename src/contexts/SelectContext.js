import React, {createContext, useState} from 'react';
import {OPTIONS_LIST} from '../services/dummy';

export const SelectContext = createContext();

const SelectContextProvider = ({children}) => {

  const [options] = useState(OPTIONS_LIST);

  return (
    <SelectContext.Provider value={{options}}>
      {children}
    </SelectContext.Provider>
  );
}

export default SelectContextProvider;
