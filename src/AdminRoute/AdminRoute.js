import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';

const AdminRoute = () => {
    const { user, isLoading } = useAuth();
    const [userDB, setUserDB] = useState([]);
    const navigate = useNavigate()
    console.log(user);
    if (isLoading) {
        return <CircularProgress />
    }
    return (<></>)
    // else {
    //     const email = user.email;
    //     // console.log(email);
    //     fetch(`http://localhost:4000/user/${email}`)
    //         .then(res => res.json())
    //         .then(data => setUserDB(data))
    //     if (userDB.role && email === userDB.email) {
    //         return <Outlet />
    //     }
    //     else {
    //         return navigate('/home')
    //     }
    // }

};

export default AdminRoute;