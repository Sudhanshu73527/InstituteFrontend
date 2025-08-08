import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext.jsx';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();  // Assuming you have a loading state in your auth context
  const location = useLocation();  // To capture the previous location

  // Show loading spinner or placeholder until the user data is fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no user is authenticated, redirect to login with the current location to return after login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If the user doesn't have the required role, redirect to the unauthorized page
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Allow rendering child routes
  return <Outlet />;
};

export default ProtectedRoute;
