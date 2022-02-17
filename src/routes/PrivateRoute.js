import { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
  const user =localStorage.getItem('user');

  return(
      user? children: <Navigate to='/'/>
  )
}
  export default PrivateRoute;