import { useLocation, useParams } from "react-router-dom";
import useGet from "../hooks/useGet";


const ProductDetail = () => {
  const params = useParams();
  const product = useGet('http://localhost:3500/products/'+params.id)
  const location = useLocation();
  console.log(params);
  console.log(location);
  return ( <h1>{product.name}</h1> );
}
 
export default ProductDetail;