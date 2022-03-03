import { 
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  PRODUCT_ERROR
} from '../../types/index'

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products:action.payload
      }
    case DELETE_PRODUCT:
      console.log(state.products.filter(product=>product.id!=action.payload));
      return{
        ...state,
        products:state.products.filter(product=>product.id!=action.payload)
      }
    // case PRODUCT_ERROR:
    //   return{
    //     ...state,
    //     productsError:action.payload
    //   }
    default:
      return state
  }
}