import { useEffect, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";

const MyNavbar = styled(Navbar)`
  height: 12vh;
  background-color: var(--dark-liver);
`;

const Header = () => {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    if (userLogged) {
      setUser(userLogged);
    }
  },[]);

  const handleClick = () =>{
    localStorage.clear();
    setUser(null);
  }

 
  return (
    <MyNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="waka-logo">
          Waka Beers 🍻
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user ? user.role ==='ADMIN'?(
            <>
            <Nav className="me-auto">
              <Link to="/productos" className="nav-link">Productos</Link>
              <Link to="/cursos" className="nav-link">Cursos</Link>
              <Link to="/admin" className="nav-link">Administración</Link>
            </Nav>
            <Nav className="ms-auto">
              <Link to="/" onClick={handleClick} className="nav-link">
                Cerrar sesión
              </Link>
            </Nav>
            </>
          ): (
            <>
            <Nav className="me-auto">
              <Link to="/productos" className="nav-link">Productos</Link>
              <Link to="/cursos" className="nav-link">Cursos</Link>
            </Nav>
            <Nav className="ms-auto">
              <Link to="/" onClick={handleClick} className="nav-link">
                Cerrar sesión
              </Link>
            </Nav>
            </>
          ): (
            <Nav className="ms-auto">
                <Link to="/login" className="nav-link">
                Iniciar sesión
                </Link>
                <Link className="nav-link" to='/registro'>
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


// user? (user.role === 'ADMIN'? 'es usuario administrado': 'es usuario comun') : 'no hay usuario'