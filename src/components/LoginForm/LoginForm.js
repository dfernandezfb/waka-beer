import axios from 'axios';
import { useContext, useState } from 'react';
import {Form, Button} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import { LOGIN_VALUES, URL_USERS } from '../../constants';
import { UserContext } from '../../context/UserContext';
import { validateLogin } from '../../helpers/validations';
import useForm from '../../hooks/useForm';
import './LoginForm.css'

const LoginForm = () =>{
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();
  const checkData = async ()=>{
    const response = await axios.get(URL_USERS);
    const {data} = response;
    const userFound = data.find(user=>user.email === values.email);
    if(userFound){
      if(userFound.password === values.password){
        localStorage.setItem('user',JSON.stringify(userFound));
        setUser(userFound);
        navigate('/productos');
      }else{
        alert('Credenciales incorrectas')
      }
    }else{
      alert('Credenciales incorrectas')
    }
  }
  
  const {values, handleKeyUp, handleSubmit, errors} = useForm(LOGIN_VALUES, checkData, validateLogin)
  
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
      <Button className="login-button" type="submit">
        Ingresar
      </Button>
    </Form>
  );
};

export default LoginForm;
