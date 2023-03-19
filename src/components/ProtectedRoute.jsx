import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ element }) {
  const auth = useContext(AuthContext);
  const location = useLocation();

  if (!localStorage.getItem('accessToken')) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!auth.user) {
    auth.verify();
  }

  return element;
}

export default ProtectedRoute;
