import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext.jsx';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();
  const location = useLocation(); // Get the current location to redirect after login

  // If user data is still loading, show a loading spinner or placeholder
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a more user-friendly spinner
  }

  // If no user is authenticated, redirect to login with the current location to redirect after login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the user's role doesn't match the allowed roles, redirect to unauthorized page
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // If everything is valid, render the child routes (Outlet)
  return <Outlet />;
};

export default ProtectedRoute;
