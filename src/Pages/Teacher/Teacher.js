import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../images/banner.png'
import clipart from '../../images/clipart.png'
import Navigation from '../Shared/Navigation/Navigation';
const Teacher = () => {
    const [teacher, setTeacher] = useState({});
    const [winSize, setWinSize] = useState(window.innerWidth);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:4000/teachers/${id}`)
            .then(response => setTeacher(response.data))
    }, [id])
    const handleTeacherDelete = () => {
        fetch(`http://localhost:4000/teachers/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.affectedRows) {
                    navigate('/teachers');
                }
            })

    }
    console.log(teacher);
    const onresize = () => {
        console.log(window.innerWidth);
        setWinSize(window.innerWidth);
    }
    window.addEventListener('resize', onresize);
    return (
        <>
            <Navigation />
            <div>

                {
                    teacher.firstName &&
                    <div id="stu-profile">
                        <Typography variant="h4" style={{ display: 'inline-block', color: '', backgroundColor: 'white', padding: '10px 20px', borderRadius: '20px' }}>Teacher's Profile</Typography>
                        <div className="main-profile">
                            <div className="profile-img">
                                <img src={teacher.img ? teacher.img : clipart} alt={teacher.name} />
                            </div>
                            {winSize >= 800 &&
                                <div className="profile-logo">
                                    <img src={logo} alt="" />
                                </div>
                            }
                            <div className="profile-info">
                                <Typography variant="h5">First Name: {teacher.firstName}</Typography>
                                <Typography variant="body1">Last Name: {teacher.lastName}</Typography>
                                <Typography variant="body1">Email: {teacher.email}</Typography>
                                <Typography variant="body1">Address: {teacher.address}</Typography>
                                <Typography variant="body1">Join date: {teacher.joindate}</Typography>

                            </div>
                        </div>

                        <div className="footer-btn">
                            <Button onClick={handleTeacherDelete} variant="contained" color="error">Delete</Button>
                            <Link to={`/update/teacher/${id}`} style={{ textDecoration: 'none' }}><Button variant="contained" color="warning">Update</Button></Link>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Teacher;