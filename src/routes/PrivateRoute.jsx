import { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { CircularProgress } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <CircularProgress
          height="100"
          width="100"
          color="#4640DE"
          ariaLabel="circular-progress-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
          strokeWidth={2}
          animationDuration={1}
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to='/login'></Navigate>
  }
  return children;
};

export default PrivateRoute;