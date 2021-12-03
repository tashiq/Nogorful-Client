import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router';

const AdminRoute = () => {
    const { user, isLoading } = useAuth();
    const [userDB, setUserDB] = useState([]);
    // const navigate = useNavigate()
    const email = user.email;
    // console.log(email);
    useEffect(() => {
        fetch(`http://localhost:4000/user/${email}`)
            .then(res => res.json())
            .then(data => setUserDB(data[0]))
    }, [email])
    // console.log(userDB);
    if (isLoading) {
        return <CircularProgress />
    }
    else if (!userDB || userDB.role === "member") {
        return <Navigate to="/home" />
    }
    else {
        return <Outlet />
    }

};

export default AdminRoute;