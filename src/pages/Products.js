import ProductCard from "../components/ProductCard/ProductCard";
import {Row, Col, Container} from 'react-bootstrap'
import useGet from "../hooks/useGet";



const Products = () => {

  const products = useGet('http://localhost:3500/products');
  
  return (
    <Container>
    <Row xs={1} md={3} className="g-2">
  {products.map((product) => (
    <Col>
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