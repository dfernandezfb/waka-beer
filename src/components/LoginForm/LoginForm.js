import axios from 'axios';
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap'
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const [values, setValues] = useState({
    email:'',
    password:''
  })

  const checkData = async ()=>{
    const response = await axios.get('http://localhost:3500/users');
    const {data} = response;
    const userFound = data.find(user=>user.email === values.email);
    if(userFound){
      userFound.password === values.password?
      //GUARDAR EN LS
      <Navigate to='/home'/>
      :
      alert('Credenciales incorrectas')
    }
  }
  const handleKeyUp = (e) =>{
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    checkData();
  }
  return (
    <Form className='w-25' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onKeyUp={handleKeyUp} type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onKeyUp={(e)=>handleKeyUp(e)} type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
