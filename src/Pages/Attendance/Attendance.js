import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            .then(res => console.log(res.data))
        setTeacherId(null)
        setStudents([])
        setChecked([])
        setDate('')
        setBranch('')
        e.target.reset();
    }
    useEffect(() => {
        fetch(`http://localhost:4000/students?branch=${branch}`)
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [branch])
    return (
        <div>
            <form>
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
                <FormControl style={{ width: '75%', marginTop: '18px' }} >
                    {
                        students?.map(student => <>
                            <input type="checkbox" id={student.id + ''} name={student.id} value={student.id} onChange={checkChange} />
                            <label for={student.id + ''} style={{ fontSize: '17px', paddingLeft: '10px' }}> ID: {student.id} Name: {student.name}</label>
                        </>)
                    }
                </FormControl>
                <Button type="submit" style={{ width: '75%', marginTop: '18px' }} variant="outlined" onClick={submitAttendance}>Submit Attendance</Button>
            </form>
        </div>
    );
};

export default Attendance;