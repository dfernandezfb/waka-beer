import LoginForm from "../components/LoginForm/LoginForm";
import styled from "styled-components";

const FormContainer = styled.div`
width:100vw;
height:70vh;
`
const Login = () => {
  return (
    <FormContainer className="d-flex justify-content-center align-items-center">
      <LoginForm/>
    </FormContainer> 
    );
}
 
export default Login;