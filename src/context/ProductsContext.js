import {createContext} from 'react'

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  

  return ( 
    <ProductsContext.Provider value={{
      products,
      addProducts,
      deletePrducts
    }} >
      {children}
    </ProductsContext.Provider>
  );
}
 
export default ProductsProvider;