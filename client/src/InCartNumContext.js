import React, {useState, createContext} from 'react';

export const InCartNumContext = createContext();

export const InCartNumProvider = (props) => {

  const [productsInCart, setProductsInCart] = useState(0)

  return(
    <InCartNumContext.Provider value={[productsInCart, setProductsInCart]}>
      {props.children}
    </InCartNumContext.Provider>
  )
}