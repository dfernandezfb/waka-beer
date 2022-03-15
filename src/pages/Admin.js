import { Container } from "react-bootstrap";
import AdminTable from "../components/AdminTable/AdminTable";

const Admin = () => {
  return ( 
  <Container className="mt-5">
  <h1>Tabla de administración</h1>
    <p>Acá podes administrar el contenido de tu página</p>
    <AdminTable/>
  </Container>
  );
}
 
export default Admin;