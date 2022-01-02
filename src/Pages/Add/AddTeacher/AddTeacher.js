import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const AddTeacher = () => {
    const [addStuData, setAddStuData] = useState({ branch: 'Sholoshahar' });
    const navigate = useNavigate()
    const handleAddTeacherBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addStuData };
        newInfo[type] = value;
        setAddStuData(newInfo);
        console.log(addStuData);
    }
    const handleAddStuSubmit = e => {
        // console.log(addStuData);
        axios.post('http://localhost:4000/teachers', addStuData)
            .then(response => {
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else if (response) {
                    alert('Insertion Successful');
                    navigate('/teachers')

                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h3" sx={{ my: 3 }}>Add a Teacher</Typography>
            <form onSubmit={handleAddStuSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField required onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="First Name" variant="outlined" />
                <TextField required name="lastName" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Last Name" variant="outlined" />
                <TextField name="phone" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Phone Number" variant="outlined" />
                <TextField name="email" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Email" variant="outlined" />
                <TextField required
                    id="date"
                    label="Join Date"
                    name="joindate"
                    type="date" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }}

                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField required name="address" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Address" variant="outlined" />

                <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
            </form>
        </Container>

    );
};

export default AddTeacher;