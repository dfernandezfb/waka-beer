import ProductCard from "../components/ProductCard/ProductCard";
import {Row, Col, Container} from 'react-bootstrap'
import useGet from "../hooks/useGet";
import { URL_PRODUCTS } from "../constants";



const Products = () => {

  const products = useGet(URL_PRODUCTS);
  
  return (
    <Container className='mt-5'>
    <Row xs={1} md={3} className="g-2">
  {products.map((product) => (
    <Col key={product.id}>
      <ProductCard
      id={product.id}
      title={product.name}
      image={product.image}
      price={product.price}
      />
    </Col>
  ))}
</Row>
  </Container>
 
  );
}
 
export default Products;