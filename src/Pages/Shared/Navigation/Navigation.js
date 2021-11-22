import React from 'react';
// import { Link } from '@mui/material';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">Nogorful</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <HashLink className="navitem" to="/home">Home</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/home#info'>Info</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/home#branches'>Branches</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/students'>Students</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/teachers'>Teachers</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="navitem" to='/login'>Login</HashLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navigation;