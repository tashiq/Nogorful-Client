import React from 'react';
import useAuth from '../Hooks/useAuth'
import CircularProgress from '@mui/material/CircularProgress'
import { Outlet } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router';
const PrivateRoute = () => {
    const location = useLocation();
    //console.log(location);
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <CircularProgress />
    }
    else if (!user.email) {
        return <Navigate to="/login" />
    }
    else {
        return <Outlet />
    }
};

export default PrivateRoute;