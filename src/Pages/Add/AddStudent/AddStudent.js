import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const AddStudent = () => {
    const [addStuData, setAddStuData] = useState({ gender: 'male', img: '', parentsOccupation: '', branch: 'Sholoshahar' });
    const navigate = useNavigate()
    const handleAddStuBlur = e => {
        const type = e.target.name;
        // console.log(addStuData);
        const value = e.target.value;
        const newInfo = { ...addStuData };
        newInfo[type] = value;
        setAddStuData(newInfo);
    }
    const handleAddStuSubmit = e => {
        // console.log(addStuData);
        axios.post('http://localhost:4000/students', addStuData)
            .then(response => {
                // console.log(response);
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else if (response) {
                    console.log(response);
                    alert('Insertion Successful');
                    navigate('/students')

                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h3" sx={{ my: 3 }}>Add a Student</Typography>
            <form onSubmit={handleAddStuSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField required name="firstName" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="First Name" variant="outlined" />
                <TextField required name="lastName" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Last Name" variant="outlined" />
                <TextField required name="fatherFirstName" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Father's First Name" variant="outlined" />

                <TextField required name="fatherLastName" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Father's Last Name" variant="outlined" />
                <FormControl style={{ width: '75%', marginTop: '18px' }} >
                    <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={addStuData.branch}
                        label="Branch"
                        name="branch"
                        onChange={handleAddStuBlur}
                    >
                        <MenuItem value="Sholoshahar">Sholoshahar</MenuItem>
                        <MenuItem value="Cantonment">Cantonment</MenuItem>
                        <MenuItem value="Agrabad">Agrabad</MenuItem>
                        <MenuItem value="CRB">CRB</MenuItem>
                        <MenuItem value="Patiya">Patiya</MenuItem>
                        <MenuItem value="Patiya">DC hill</MenuItem>
                    </Select>
                </FormControl>
                {/* <TextField name="img" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Image" variant="outlined" type="file" InputLabelProps={{
                    shrink: true,
                }} /> */}
                <TextField required name="classs" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Class" variant="outlined" />


                <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
            </form>
        </Container>

    );
};

export default AddStudent;