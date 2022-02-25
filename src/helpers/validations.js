export const validateLogin = (values) =>{
  let errors={}
  if(!values.email){
    errors.email='No se puede dejar vacío'
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email='El email no esta escrito correctamente';
  }
  if(!values.password){
    errors.password = 'No se puede dejar vacío'
  }
  return errors
}