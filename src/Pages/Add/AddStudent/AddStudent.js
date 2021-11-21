import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios'
const AddStudent = () => {
    const [addStuData, setAddStuData] = useState({});
    const handleAddStuBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = [...addStuData];
        newInfo[type] = value;
        setAddStuData(newInfo);
    }
    const handleAddStuSubmit = e => {
        axios.post('http://localhost:4000/students', addStuData)
            .then(response => {
                if (response) {
                    alert('A Student Is Added')
                }
            })
        e.target.reset();
        e.preventDefault();
    }
    return (
        <form onSubmit={handleAddStuSubmit}>
            <TextField name="name" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} sx={{ mx: 'auto' }} label="Name" variant="outlined" />
            <TextField name="father" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} sx={{ mx: 'auto' }} label="Father's Name" variant="outlined" />
            <TextField name="mother" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} sx={{ mx: 'auto' }} label="Mother's Name" variant="outlined" />
            <TextField name="addmission" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} sx={{ mx: 'auto' }} label="Addmission Date" variant="outlined" type="date" />
            <TextField name="cls" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} sx={{ mx: 'auto' }} label="Class" variant="outlined" />
            <TextField name="school" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} sx={{ mx: 'auto' }} label="School" variant="outlined" />
            <TextField name="address" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} sx={{ mx: 'auto' }} label="Address" variant="outlined" />
            <TextField name="img" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} sx={{ mx: 'auto' }} label="Image" variant="outlined" type="file" />
            <Button variant="outlined" type="submit">Add</Button>
        </form>

    );
};

export default AddStudent;