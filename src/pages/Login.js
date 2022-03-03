import LoginForm from "../components/LoginForm/LoginForm";
import styled from "styled-components";

export const FormContainer = styled.div`
width:100vw;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`
const Login = () => {
  return (
    <FormContainer>
      <LoginForm/>
    </FormContainer> 
    );
}
 
export default Login;