import { URL_PRODUCTS } from "../../constants";
import useGet from "../../hooks/useGet";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const AdminTable = () => {
  const products = useGet(URL_PRODUCTS);
  const handleDelete = async (e) =>{
    const id = e.target.parentElement.parentElement.id;
    await axios.delete(URL_PRODUCTS+'/'+id)
  }

  return (
    <>
      <Button>Agregar producto</Button>
      <Table striped bordered hover>
        <tbody>
          {products.map(({id, name, price, image}) => (
            <tr key={id} id={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{image}</td>
              <td>
                <Button variant="success">Actualizar</Button>
                <Button variant="danger" onClick={(e)=>handleDelete(e)}>Borrar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AdminTable;
