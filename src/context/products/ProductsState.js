import { useReducer } from "react";
import ProductsReducer from "./ProductsReducer";
import ProductsContext from "./ProductsContext";
import axios from "axios";
import { URL_PRODUCTS } from "../../constants";
import { DELETE_PRODUCT, GET_PRODUCTS } from "../../types";

const ProductsState = ({children})=>{
  const initialState = {
    products:[],
    productsError:''
  }
  
  const [state, dispatch] = useReducer(ProductsReducer,initialState);

  const getProducts = async () =>{
    try {
      const response = await axios.get(URL_PRODUCTS);
      dispatch({
        type:GET_PRODUCTS,
        payload:response.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  const deleteProduct = async (id) =>{
    try {
      await axios.delete(URL_PRODUCTS+id);
      dispatch({
        type:DELETE_PRODUCT,
        payload:id
      })
    } catch (error) {
      console.log(error);
    }
  }
  
  return(
    <ProductsContext.Provider value={{
      products:state.products,
      productsError:state.productsError,
      getProducts,
      // addProduct,
      deleteProduct,
      // updateProduct
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsState