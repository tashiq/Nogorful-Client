import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../images/banner.png'
import clipart from '../../images/clipart.png'
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
    const onresize = () => {
        // console.log(window.innerWidth);
        setWinSize(window.innerWidth);
    }
    window.addEventListener('resize', onresize);
    return (
        <>
            <div>

                {
                    teacher.name &&
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
                                <Typography variant="h5">Name: {teacher.name}</Typography>
                                <Typography variant="body1">ID: {teacher.id}</Typography>
                                <Typography variant="body1">Phone: {teacher.phone || "Not Provided"}</Typography>
                                <Typography variant="body1">Email: {teacher.email || "Not Provided"}</Typography>
                                <Typography variant="body1">Degree: {teacher.degree || "Not Provided"}</Typography>
                                <Typography variant="body1">Institution: {teacher.institution || "Not Provided"}</Typography>
                                <Typography variant="body1">Gender: {teacher.gender}</Typography>
                                <Typography variant="body1">Address: {teacher.address}</Typography>
                                <Typography variant="body1">Join Date: {teacher.joined.slice(0, 10)}</Typography>
                                <Typography variant="body1">Branch: {teacher.branch}</Typography>
                            </div>
                        </div>

                        <div className="footer-btn">
                            <Button onClick={handleTeacherDelete} variant="contained" color="error">Delete</Button>
                            <Link to={`/dashboard/update/teacher/${id}`} style={{ textDecoration: 'none' }}><Button variant="contained" color="warning">Update</Button></Link>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Teacher;