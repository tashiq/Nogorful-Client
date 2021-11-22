import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
const AddStudent = () => {
    const [gender, setGender] = useState('male');
    const [addStuData, setAddStuData] = useState({ gender: gender, img: '', parentsJob: '' });
    const handleAddStuBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addStuData };
        newInfo[type] = value;
        setAddStuData(newInfo);
    }
    const handleGenderChange = e => {
        setGender(e.target.value);
        const newInfo = { ...addStuData };
        newInfo['gender'] = e.target.value;
        setAddStuData(newInfo);
        console.log(addStuData);
    }
    const handleAddStuSubmit = e => {
        console.log(addStuData);
        axios.post('http://localhost:4000/students', addStuData)
            .then(response => {
                console.log(response);
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else if (response.data.insertId) {
                    alert('Insertion Successful');
                    setAddStuData({ gender: 'male', img: '', parentsJob: '' });
                }
            })
        e.target.reset();
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h3" sx={{ my: 3 }}>Add a Student</Typography>
            <form onSubmit={handleAddStuSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField required name="name" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Name" variant="outlined" />
                <TextField required name="father" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Father's Name" variant="outlined" />
                <TextField required name="mother" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Mother's Name" variant="outlined" />
                <TextField required
                    id="date"
                    label="Addmission Date"
                    name="addmission"
                    type="date" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }}

                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField name="img" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Image" variant="outlined" type="file" InputLabelProps={{
                    shrink: true,
                }} />
                <TextField required name="cls" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Class" variant="outlined" />
                <TextField required name="school" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="School" variant="outlined" />
                <TextField required name="address" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Address" variant="outlined" />
                {/* <TextField required name="gender" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Gender" variant="outlined" /> */}
                <FormControl style={{ width: '75%', marginTop: '18px' }} >
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="Gender"
                        name="gender"
                        onChange={handleGenderChange}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </FormControl>
                <TextField name="parentsJob" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Parents Occupation" variant="outlined" />

                <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
            </form>
        </Container>

    );
};

export default AddStudent;