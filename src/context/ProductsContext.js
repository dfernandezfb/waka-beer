import {useState} from 'react'

export const ProductsContext = createContext();
  const [products, setProducts] = useState([])
const ProductsProvider = ({children}) => {
  return ( 
    <ProductsContext.Provider value={{
      products
    }}>
      {children}
    </ProductsContext.Provider>
   );
}
 
export default ProductsProvider;