import { Carousel } from "react-bootstrap";
import './Landing.css'

const Landing = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Encontrá la mejor variedad de cervezas en el mercado</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://images.unsplash.com/photo-1532634733-cae1395e440f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Producción enteramente local</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Landing;
