import {  useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import useGet from "../hooks/useGet";
import useMediaQuery from "../hooks/useMediaQuery";
import { URL_PRODUCTS } from "../constants";

const MyImageProduct = styled.img`
  width:100%;
`

const ProductDetail = () => {
  const {width} = useMediaQuery();
  const params = useParams();
  const product = useGet(URL_PRODUCTS+params.id)

  return ( 
    width>768?(
      <Container className='my-5'>
      <Row>
      <Col md={4}>
      <MyImageProduct src={product.image}/>
      </Col>
      <Col md={8}>
      <h2>{product.name}</h2>
      <br />
      <h3>Precio: {product.price}</h3>
      </Col>
      </Row>
      </Container>
      ):(
        <Container className='my-5'>
      <Row>
      <Col md={12}>
      <MyImageProduct src={product.image}/>
      </Col>
      <Col md={12}>
      <h2>{product.name}</h2>
      <br />
      <h3>Precio: {product.price}</h3>
      </Col>
      </Row>
      </Container>
      )
      )
    
}
 
export default ProductDetail;