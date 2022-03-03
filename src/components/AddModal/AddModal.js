import { Modal, Button, Form } from "react-bootstrap";

const AddModal = ({ show, handleClose, selected }) => {
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
          <Modal.Title>Agregar producto</Modal.Title>
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
export default AddModal;