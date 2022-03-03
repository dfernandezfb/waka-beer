import { URL_PRODUCTS } from "../../constants";
import useGet from "../../hooks/useGet";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import ProductsContext from "../../context/products/ProductsContext";
import UpdateModal from "../UpdateModal/UpdateModal";
import AddModal from "../AddModal/AddModal";

const AdminTable = () => {
  // const [products,setProducts] = useGet(URL_PRODUCTS);
  const {products, getProducts, deleteProduct} = useContext(ProductsContext);
  const [selected, setSelected] = useState(null);
  useEffect(()=>{
    getProducts()
  },[])
  const handleDelete = async (e) =>{
    const id = e.target.parentElement.parentElement.id;
    deleteProduct(id)
  }
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowUpdate = () => setShowUpdate(true);
  const handleCloseUpdate = () => setShowUpdate(false);
  return (
    <>
      <Button className='mb-3' onClick={handleShowUpdate}>Agregar producto</Button>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {products.map(({id, name, price, image}) => (
            <tr key={id} id={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{image}</td>
              <td>
                <Button variant="success" className="w-100 mb-1" onClick={handleShowUpdate} onClick={(e)=>setSelected(e.target.parentElement.parentElement.id)}>Actualizar</Button>
                <Button variant="danger" className="w-100 mb-1" onClick={(e)=>handleDelete(e)}>Borrar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <UpdateModal show={showUpdate} handleClose={handleCloseUpdate} selected={selected}/>
      <AddModal show={showAdd} handleClose={handleCloseAdd} selected={selected}/>
    </>
  );
};

export default AdminTable;
