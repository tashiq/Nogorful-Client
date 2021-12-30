import React, { useEffect, useState } from 'react';
import logo from '../../images/banner.png'
import { useParams } from 'react-router';
import './Student.css'
import axios from 'axios';
import clipart from '../../images/clipart.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
const Student = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({})
    const navigate = useNavigate();
    const [winSize, setWinSize] = useState(window.innerWidth);

    useEffect(() => {
        axios.get(`http://localhost:4000/students/${id}`)
            .then(response => setStudent(response.data))
            .catch(err => alert(err))

    }, [id])
    const handleStudentDelete = () => {
        fetch(`http://localhost:4000/students/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.affectedRows) {
                    navigate('/students');
                }
            })
    }

    const onresize = () => {
        // console.log(window.innerWidth);
        setWinSize(window.innerWidth);
    }
    window.addEventListener('resize', onresize);
    return (
        <div>

            {
                student.name &&
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
                            <Typography variant="h5">Name: {student.name}</Typography>
                            <Typography variant="body1">Father's Name: {student.father}</Typography>
                            <Typography variant="body1">Mother's Name: {student.mother}</Typography>
                            <Typography variant="body1">Parents Occupation: {student.parentsOccupation}</Typography>
                            <Typography variant="body1">Gender: {student.gender}</Typography>
                            <Typography variant="body1">School: {student.school}</Typography>
                            <Typography variant="body1">Class: {student.cls}</Typography>
                            <Typography variant="body1">Branch: {student.branch}</Typography>
                            <Typography variant="body1">Addmission: {student.addmission.slice(0, 10)}</Typography>
                            <Typography variant="body1">Address: {student.address}</Typography>
                        </div>
                    </div>

                    <div className="footer-text">
                        They are not street-child they are nogorful
                    </div>

                    <div className="footer-btn">
                        <Button onClick={handleStudentDelete} variant="contained" color="error">Delete</Button>
                        <Link to={`/dashboard/update/student/${id}`} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="warning">Update</Button></Link>
                    </div>
                </div>
            }
        </div>

    );
};

export default Student;