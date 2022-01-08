import React from 'react';
// import { NavLink } from 'react-router-hash-link';
import './Navigation.css'
import useAuth from '../../../Hooks/useAuth'
// import { Typography } from '@mui/material';
import logoImg from '../../../images/banner.png'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@mui/material';
const Navigation = () => {
    const { logOut, user } = useAuth();
    // const [navState, setNavState] = useState({
    //     activeNav: null,
    //     navs:
    //         [{
    //             id: 1,
    //             depen: false,
    //             hashTo: '/home',
    //             icon: 'fas fa-igloo',
    //             title: 'Home'
    //         },
    //         {
    //             id: 2,
    //             depen: false,
    //             hashTo: '/students',
    //             icon: 'fas fa-graduation-cap',
    //             title: 'Students'
    //         },
    //         {
    //             id: 3,
    //             depen: false,
    //             hashTo: '/teachers',
    //             icon: 'fas fa-chalkboard-teacher',
    //             title: 'Teachers'
    //         },
    //         {
    //             id: 4,
    //             depen: false,
    //             hashTo: '/attendance',
    //             icon: 'fas fa-school',
    //             title: 'Attendance'
    //         },
    //         {
    //             id: 5,
    //             depen: false,
    //             hashTo: '/dashboard',
    //             icon: 'fas fa-user-shield',
    //             title: 'Dashboard'
    //         },
    //         {
    //             id: 6,
    //             depen: true,
    //             depenValue: user.email,
    //         }
    //         ]
    // })
    // const handleToggleActive = index => {
    //     console.log('click');
    //     const prevdata = { ...navState };
    //     prevdata['activeNav'] = index;
    //     setNavState(prevdata)
    //     console.log(navState);
    // }
    // const handleActive = index => {
    //     console.log(index, navState.activeNav);
    //     if (navState.activeNav === index) {
    //         return "active nav-item"
    //     }
    //     else {
    //         return 'nav-item'
    //     }
    // }
    console.log();
    return (
        <header>
            <nav id='nav'>
                <a className="navbar-brand fs-3 fw-bolder" href="/home" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                    <img src={logoImg} alt="" width="50" />
                    <span style={{ display: 'inline-block', padding: '0 20px' }}>Nogorful</span>
                </a>
                <ul>
                    {/* {navState.navs.map((item, index) => {
                        if (!item.depen) {
                            return (
                                <li key={index} onClick={() => handleToggleActive(index + 1)} className={handleActive(index + 1)} >
                                    <NavLink className="navitem" to={item.hashTo}>
                                        <span className='nav-item-icon'><i className={item.icon}></i></span>
                                        <span className='nav-item-text'>{item.title}</span>
                                    </NavLink>
                                </li>
                            )
                        }
                        else {
                            return <></>
                        }
                    })} */}
                    <li className="nav-item" >
                        <NavLink activeClassName="active" className="navitem" to="/home"><span className='nav-item-icon'><i className="fas fa-igloo"></i></span><span className='nav-item-text'>Home</span></NavLink>
                        <div className="indicator"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="navitem" to='/students'><span className='nav-item-icon'><i className="fas fa-graduation-cap"></i></span><span className='nav-item-text'>Students</span></NavLink>
                        <div className="indicator"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="navitem" to='/teachers'><span className='nav-item-icon'><i className="fas fa-chalkboard-teacher"></i></span><span className='nav-item-text'>Teachers</span></NavLink>
                        <div className="indicator"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="navitem" to='/attendance'><span className='nav-item-icon'><i className="fas fa-school"></i></span><span className='nav-item-text'>Attendance</span></NavLink>
                        <div className="indicator"></div>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="navitem" to='/dashboard'><span className='nav-item-icon'><i className="fas fa-user-shield"></i></span><span className='nav-item-text'>Dashboard</span></NavLink>
                        <div className="indicator"></div>
                    </li>

                    {
                        user.email ?
                            <li className="nav-item" onClick={logOut}>
                                <Button variant='contained' style={{ height: '30px' }}><Link to="/home" className="navitem" style={{ color: 'white' }}>
                                    Logout
                                </Link></Button>
                            </li>
                            :
                            <li className="nav-item">
                                <Button variant='contained' style={{ height: '30px' }}>
                                    <NavLink className="navitem" to='/login' style={{ color: 'white' }}>
                                        Login
                                    </NavLink>
                                </Button>
                            </li>
                    }

                </ul>

            </nav>
        </header >
    );
};

export default Navigation;