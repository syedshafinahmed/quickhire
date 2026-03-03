import { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);

  if (!user) {
    return <Navigate state={location?.pathname} to='/login'></Navigate>
  }
  return children;
};

export default PrivateRoute;