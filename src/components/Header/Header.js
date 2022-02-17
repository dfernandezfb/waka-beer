import { useEffect, useState } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

const MyNavbar = styled(Navbar)`
  height: 10vh;
  background-color: var(--dark-liver) !important;
`;
const MyLink = styled(Link)`
  text-decoration:none;
  color:var(--mint-cream);
`

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userLogged = localStorage.getItem("user");
    if (userLogged) {
      setUser(userLogged);
    }
  }, []);
  return (
    <MyNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="header-title">
          Waka-Beer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user ? (
            <Nav className="me-auto">
              <Nav.Link as="div">
                <MyLink to="">
                  Productos
                </MyLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MyLink to="">
                  Cursos
                </MyLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MyLink to="">
                  Cursos
                </MyLink>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link as="div">
                <MyLink to="/login">
                  Iniciar sesión
                </MyLink>
              </Nav.Link>
              <Nav.Link as="div">
                <MyLink to="/registro">
                  Registrarse
                </MyLink>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </MyNavbar>
  );
};

export default Header;
