import {Navigate} from 'react-router-dom'

const AdminRoute = ({children}) => {
  const user = localStorage.getItem('user');
  return ( 
    user? (user.role=='ADMIN'? children :<Navigate to='/home'/>): <Navigate to='/'/>
   );
}
 
export default AdminRoute;