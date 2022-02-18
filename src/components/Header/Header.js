import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyNavbar = styled(Navbar)`
  height: 12vh;
  background-color: var(--dark-liver);
`;

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    if (userLogged) {
      setUser(userLogged);
    }
  },[]);

  return (
    <MyNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="waka-logo">
          Waka Beers 🍻
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user ? (
            <Nav className="me-auto">
              <Link to="/productos" className="nav-link">Productos</Link>
              <Link to="/cursos" className="nav-link">Cursos</Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
                <Link to="/login" className="nav-link">
                Iniciar sesión
                </Link>
                <Link className="nav-link" to='/register'>
                  Registrarse
                </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </MyNavbar>
  );
};

export default Header;
