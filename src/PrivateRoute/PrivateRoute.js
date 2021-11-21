import React from 'react';
import { Navigate } from 'react-router';
import useAuth from '../Hooks/useAuth'
import CircularProgress from '@mui/material/CircularProgress'
import { Outlet } from 'react-router-dom';
const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    else if (user.email) {
        <Outlet />
    }
    else {
        <Navigate to="/login" />
    }
};

export default PrivateRoute;