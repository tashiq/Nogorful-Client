import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Attendance = () => {
    const [teacherId, setTeacherId] = useState(null);
    const [branch, setBranch] = useState('');
    const [students, setStudents] = useState([]);
    const [checked, setChecked] = useState([])
    const [date, setDate] = useState('');

    const onTeacherIdBlur = e => {
        const value = e.target.value;
        setTeacherId(value);
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
        const newData = { students: checked, teacherId, date }
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
    return (
        <div>
            <Navigation />
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
                <TextField required name="teacherId" onBlur={onTeacherIdBlur} style={{ width: '75%', marginTop: '18px' }} label="Teacher ID" variant="outlined" />
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
                            <input type="checkbox" id={student.id + ''} name={student.id} value={student.id} onChange={checkChange} />
                            <label for={student.id + ''} style={{ fontSize: '17px', paddingLeft: '20px' }}> ID: {student.id} Name: {student.name}</label>
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