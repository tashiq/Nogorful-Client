import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'
import useAuth from '../../../Hooks/useAuth'
// import { Typography } from '@mui/material';
import logoImg from '../../../images/banner.png'
import { Link } from 'react-router-dom';
const navItems = document.querySelectorAll('.nav-item');
// console.log(navItems);
const Navigation = () => {
    function activePass() {
        console.log('hello');
    }
    // console.log(navItems);
    for (let i = 0; i < navItems.length; i++) {
        // console.log(navItems[i]);
        navItems[i].addEventListener('click', activePass);
    }
    const { logOut, user } = useAuth();
    return (
        <header>
            <nav id='nav'>
                <a className="navbar-brand fs-3 fw-bolder" href="/home" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                    <img src={logoImg} alt="" width="50" />
                    <span style={{ display: 'inline-block', padding: '0 20px' }}>Nogorful</span>
                </a>
                <ul>
                    <li className="nav-item active">
                        <HashLink className="navitem" to="/home"><span className='nav-item-icon'><i className="fas fa-igloo"></i></span><span className='nav-item-text'>Home</span></HashLink>
                    </li>
                    <li className="nav-item ">
                        <HashLink className="navitem" to='/students'><span className='nav-item-icon'><i className="fas fa-graduation-cap"></i></span><span className='nav-item-text'>Students</span></HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="navitem" to='/teachers'><span className='nav-item-icon'><i className="fas fa-chalkboard-teacher"></i></span><span className='nav-item-text'>Teachers</span></HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="navitem" to='/attendance'><span className='nav-item-icon'><i className="fas fa-school"></i></span><span className='nav-item-text'>Attendance</span></HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="navitem" to='/dashboard'><span className='nav-item-icon'><i className="fas fa-user-shield"></i></span><span className='nav-item-text'>Dashboard</span></HashLink>
                    </li>
                    {
                        user.email ?
                            <li className="nav-item" onClick={logOut}>
                                <Link to="/home" className="navitem"><span className='nav-item-icon'><i className="fas fa-sign-out-alt"></i></span><span className='nav-item-text'>Log Out({user.displayName})</span></Link>
                            </li>
                            :
                            <li className="nav-item">
                                <HashLink className="navitem" to='/login'><span className='nav-item-icon'><i className="fas fa-sign-in-alt"></i></span><span className='nav-item-text'>Login</span></HashLink>
                            </li>
                    }

                    <div className="indicator"></div>
                </ul>

            </nav>
        </header>
    );
};

export default Navigation;