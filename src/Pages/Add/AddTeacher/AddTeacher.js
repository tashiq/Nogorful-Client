import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const AddTeacher = () => {
    const [addStuData, setAddStuData] = useState({ gender: 'male', branch: 'Sholoshahar' });
    const navigate = useNavigate()
    const handleAddTeacherBlur = e => {
        const type = e.target.name;
        // console.log(addStuData);
        const value = e.target.value;
        const newInfo = { ...addStuData };
        newInfo[type] = value;
        setAddStuData(newInfo);
    }
    const handleAddStuSubmit = e => {
        // console.log(addStuData);
        axios.post('http://localhost:4000/teachers', addStuData)
            .then(response => {
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else if (response.data.insertId) {
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
                <TextField required name="name" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Name" variant="outlined" />
                <TextField name="phone" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Phone Number" variant="outlined" />
                <TextField name="email" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Email" variant="outlined" />
                <TextField required
                    id="date"
                    label="Join Date"
                    name="joined"
                    type="date" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }}

                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl style={{ width: '75%', marginTop: '18px' }} >
                    <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={addStuData.branch}
                        label="Branch"
                        name="branch"
                        onChange={handleAddTeacherBlur}
                    >
                        <MenuItem value="Sholoshahar">Sholoshahar</MenuItem>
                        <MenuItem value="Cantonment">Cantonment</MenuItem>
                        <MenuItem value="Agrabad">Agrabad</MenuItem>
                        <MenuItem value="CRB">CRB</MenuItem>
                        <MenuItem value="Patiya">Patiya</MenuItem>
                        <MenuItem value="Patiya">DC hill</MenuItem>
                    </Select>
                </FormControl>
                <TextField name="img" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Image" variant="outlined" type="file" InputLabelProps={{
                    shrink: true,
                }} />
                <TextField required name="degree" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Highest Degree" variant="outlined" />
                <TextField required name="institution" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Institution" variant="outlined" />
                <TextField required name="address" onBlur={handleAddTeacherBlur} style={{ width: '75%', marginTop: '18px' }} label="Address" variant="outlined" />
                {/* <TextField required name="gender" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Gender" variant="outlined" /> */}
                <FormControl style={{ width: '75%', marginTop: '18px' }} >
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={addStuData.gender}
                        label="Gender"
                        name="gender"
                        onChange={handleAddTeacherBlur}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </Select>
                </FormControl>


                <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
            </form>
        </Container>

    );
};

export default AddTeacher;