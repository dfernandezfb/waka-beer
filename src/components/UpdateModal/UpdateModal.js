import { useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ProductsContext from "../../context/products/ProductsContext";
import useForm from "../../hooks/useForm";

const UpdateModal = ({ show, handleClose, selected }) => {
  const {products} = useContext(ProductsContext)
  const product = products.find(product=> product.id == selected);
  console.log(product);
  // const initialValue = {
    // id:'',
    // name: product.name,
    // price:product.name
  // }
  const updateProduct = ()=>{
    console.log('actualizado');
  }
  // const {values, handleKeyUp, handleSubmit} = useForm(initialValue,updateProduct);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Actualizar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>hola</p>
          {/* <Form className="w-25" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>ID</Form.Label>
              <Form.Control
                onKeyUp={handleKeyUp}
                type="number"
                name="id"
                value={product.id}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onKeyUp={(e) => handleKeyUp(e)}
                type="password"
                placeholder="Password"
                name="password"
                value={product.name}
              />
            </Form.Group>
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UpdateModal;
