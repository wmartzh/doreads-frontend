import React, { useContext } from 'react';
import { Route, Navigate, Routes, useLocation } from 'react-router';
import { AuthContext } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import AuthProvider from './providers/auth.provider';
import { protectedRoutes, unprotectedRoutes } from './router/router';

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

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {unprotectedRoutes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
        <Route element={<MainLayout />}></Route>
        {protectedRoutes.map((route, index) => (
          <Route
            path={route.path}
            element={<ProtectedRoute element={route.element} />}
            key={index}
          />
        ))}
      </Routes>
    </AuthProvider>
  );
}
