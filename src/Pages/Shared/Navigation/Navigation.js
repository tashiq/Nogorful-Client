import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'
import useAuth from '../../../Hooks/useAuth'
// import { Typography } from '@mui/material';
import logoImg from '../../../images/banner.png'
import { Link } from 'react-router-dom';
const Navigation = () => {
    const { logOut, user } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-3 bg-light">
            <div className="container-fluid">
                <a class="navbar-brand" href>
                    <img src={logoImg} alt="" width="50" />
                </a>
                <a className="navbar-brand fs-3 fw-bolder" href="/home">Nogorful</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <HashLink className="navitem" to="/home">Home</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/students'>Students</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/teachers'>Teachers</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/attendance'>Attendance</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/dashboard'>Dashboard</HashLink>
                        </li>
                        {
                            user.email ?
                                <li className="nav-item" onClick={logOut}>
                                    <Link to="/home" className="navitem">Log Out({user.displayName})</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <HashLink className="navitem" to='/login'>Login</HashLink>
                                </li>
                        }


                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navigation;