import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Attendance = () => {
    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState(null)
    const [branch, setBranch] = useState('');
    const [students, setStudents] = useState([]);
    const [checked, setChecked] = useState([])
    const [date, setDate] = useState('');

    const onTeacherChange = e => {
        setTeacher(e.target.value);
    }
    const onBranchChange = e => {
        setBranch(e.target.value);
    }
    const onDateChange = e => {
        setDate(e.target.value)
    }
    const checkChange = e => {
        if (e.target.checked) {
            setChecked([...checked, e.target.value])
        }
        else {
            const newValue = checked.filter(value => value !== e.target.value)
            setChecked(newValue)
        }
    }
    const submitAttendance = e => {
        const newData = { students: checked, phone: teacher, date }
        console.log(newData);
        axios.post('http://localhost:4000/attendance', newData)
            .then(res => {

            })

        e.preventDefault();
    }
    useEffect(() => {
        fetch(`http://localhost:4000/students?branch=${branch}`)
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [branch])
    useEffect(() => {
        fetch(`http://localhost:4000/teachers`)
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <Navigation />
            <div style={{ padding: '10px 20px', backgroundColor: '#eee', borderRadius: '10px', width: '100px' }}><Link to="/attendance-history">History</Link></div>
            <Typography variant="h3" sx={{ m: 2 }}>Attendance </Typography>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField required
                    id="date"
                    label="Addmission Date"
                    name="addmission"
                    type="date" onChange={onDateChange} value={date} style={{ width: '75%', marginTop: '18px' }}

                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <FormControl style={{ width: '75%', marginTop: '18px' }} >
                    <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={teacher}
                        label="Branch"
                        name="branch"
                        onChange={onTeacherChange}
                    >
                        {teachers.map(teacher => <MenuItem value={teacher.phone}>{teacher.phone?.slice(0, 5) + ' ' + teacher.firstName + ' ' + teacher.lastName}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl style={{ width: '75%', marginTop: '18px' }} >
                    <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={branch}
                        label="Branch"
                        name="branch"
                        onChange={onBranchChange}
                    >
                        <MenuItem value="Sholoshahar">Sholoshahar</MenuItem>
                        <MenuItem value="Cantonment">Cantonment</MenuItem>
                        <MenuItem value="Agrabad">Agrabad</MenuItem>
                        <MenuItem value="CRB">CRB</MenuItem>
                        <MenuItem value="Patiya">Patiya</MenuItem>
                        <MenuItem value="Patiya">DC hill</MenuItem>
                    </Select>
                </FormControl>
                <Typography variant="h5" sx={{ my: 3 }}>Students</Typography>
                <FormControl style={{ width: '75%', marginTop: '18px' }} >
                    {
                        students?.map(student => <>
                            <div className='d-flex align-items-center'>
                                <input type="checkbox" id={student.sid + ''} name={student.sid} value={student.sid} onChange={checkChange} style={{ fontSize: '19px', paddingLeft: '20px' }} />
                                <label for={student.sid + ''} style={{ fontSize: '17px', paddingLeft: '20px' }}> ID: {student.sid} Name: {student.firstName + ' ' + student.lastName}</label>
                            </div>
                        </>)
                    }
                </FormControl>
                <Button type="submit" style={{ width: '75%', marginTop: '18px' }} variant="outlined" onClick={submitAttendance} sx={{ mb: 4 }}>Submit Attendance</Button>
            </form>
            <Footer />
        </div>
    );
};

export default Attendance;