import { ADD_PRODUCT, DELETE_PRODUCT, ERROR_PRODUCTS, GET_PRODUCTS } from "../../types"


export default (state,action) =>{
  switch(action.type){
    case GET_PRODUCTS:
      return{
        ...state,
        products: action.payload
      }
    case ERROR_PRODUCTS:
      return{
        ...state,
        productsError:'Hubo un error'
      }
    case DELETE_PRODUCT:
      return{
        ...state,
        products: state.products.filter(product => product.id != action.payload)
      }
    case ADD_PRODUCT:
      console.log(action.payload);
      return{
        ...state,
        products: state.products.push(action.payload)
      }
  }
}