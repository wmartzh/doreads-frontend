import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import AuthProvider from './providers/auth.provider';
import ProtectedRoute from './components/ProtectedRoute';
import { protectedRoutes, unprotectedRoutes } from './router/router';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {unprotectedRoutes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
        <Route element={<MainLayout />}>
          {protectedRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={<ProtectedRoute element={route.element} />}
              key={index}
            />
          ))}
        </Route>
      </Routes>
    </AuthProvider>
  );
}
