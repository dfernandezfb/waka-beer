import { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import ProductsContext from "../../context/products/ProductContext";
import useForm from "../../hooks/useForm";

const AddModal = ({ show, handleClose }) => {
  const {addProduct} = useContext(ProductsContext);
  const initialValue = {
    name:'',
    price:0,
    image:''
  }
  const sendData = ()=>{
    addProduct(values)
  }
  const { values, handleKeyUp, handleSubmit} = useForm(initialValue,sendData)
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
          <Form onSubmit={handleSubmit}>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onKeyUp={handleKeyUp}
                type="text"
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onKeyUp={handleKeyUp}
                type="number"
                name="price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                onKeyUp={handleKeyUp}
                type="text"
                name="image"
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
          </Form>
      </Modal>
    </>
  );
};

export default AddModal;
