import axios from 'axios'
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { URL_USERS } from '../../constants'
import useForm from '../../hooks/useForm'
import useGet from '../../hooks/useGet'
import './RegisterForm.css'

const RegisterForm = () => {
  const initialValues={
    name:'',
    password:'',
    email:'',
    age:0
  }
  const navigate = useNavigate()
  const users = useGet(URL_USERS);
  const chequear = async ()=>{
    const repeatedUser = users.find(user=>user.email === values.email);
    if(repeatedUser){
      alert('El mail ingresado ya existe')
    }else{
      axios.post(URL_USERS,values);
      navigate('/login');
    }
  }
  const {values, handleKeyUp, handleSubmit}= useForm(initialValues,chequear);

  return ( 
    <Form className='w-25' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onKeyUp={handleKeyUp} type="text" placeholder="Pone tu nombre" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Edad</Form.Label>
        <Form.Control onKeyUp={handleKeyUp} type="number" placeholder="Ingresa tu edad" name="age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repite tu Password</Form.Label>
        <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password2"/>
      </Form.Group>
      <Button className='register-button' type="submit">
        Registrarme
      </Button>
    </Form>
  );
}
 
export default RegisterForm;