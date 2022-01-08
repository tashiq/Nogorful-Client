import React, { useEffect, useState } from 'react';
import logo from '../../images/banner.png'
import { useParams } from 'react-router';
import './Student.css'
import axios from 'axios';
import clipart from '../../images/clipart.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
const Student = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({})
    const navigate = useNavigate();
    const [winSize, setWinSize] = useState(window.innerWidth);

    useEffect(() => {
        axios.get(`https://frozen-dawn-59766.herokuapp.com/students/${id}`)
            .then(response => setStudent(response.data))
            .catch(err => alert(err))

    }, [id])
    const handleStudentDelete = () => {
        fetch(`https://frozen-dawn-59766.herokuapp.com/students/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.affectedRows) {
                    navigate('/students');
                }
            })
    }

    const onresize = () => {
        setWinSize(window.innerWidth);
    }
    //console.log(student);
    window.addEventListener('resize', onresize);
    return (
        <div>
            {
                student.firstName &&
                <div id="stu-profile">
                    <Typography variant="h4" style={{ display: 'inline-block', color: '', backgroundColor: 'white', padding: '10px 20px', borderRadius: '20px' }}>Student Profile</Typography>
                    <div className="main-profile">
                        <div className="profile-img">
                            <img src={student.img ? student.img : clipart} alt={student.name} />
                        </div>
                        {winSize >= 800 &&
                            <div className="profile-logo">
                                <img src={logo} alt="" />
                            </div>}
                        <div className="profile-info">
                            <Typography variant="h5">Student ID: {student.sid}</Typography>
                            <Typography variant="body1">First Name: {student.firstName}</Typography>
                            <Typography variant="body1">Last Name: {student.lastName}</Typography>
                            <Typography variant="body1">Father's First Name: {student.fatherFirstName}</Typography>
                            <Typography variant="body1">Father's Last Name: {student.fatherLastName}</Typography>
                            <Typography variant="body1">Class: {student.class}</Typography>
                            <Typography variant="body1">Branch: {student.branch}</Typography>
                        </div >
                    </div >

                    <div className="footer-text">
                        They are not street-child they are nogorful
                    </div>

                    <div className="footer-btn">
                        <Button onClick={handleStudentDelete} variant="contained" color="error">Delete</Button>
                        <Link to={`/update/student/${id}`} style={{ textDecoration: 'none' }}><Button variant="contained" color="warning">Update</Button></Link>
                    </div>
                </div >
            }
            <Footer />
        </div >

    );
};

export default Student;