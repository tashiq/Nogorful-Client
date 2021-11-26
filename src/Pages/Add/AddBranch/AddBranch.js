import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const AddBranch = () => {
    const [addBranchData, setAddBranchData] = useState({});
    const navigate = useNavigate()
    const handleAddBranchBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addBranchData };
        newInfo[type] = value;
        setAddBranchData(newInfo);
    }
    const handleAddBranchSubmit = e => {
        console.log(addBranchData);
        axios.post('http://localhost:4000/branches', addBranchData)
            .then(response => {
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else if (response.data.insertId) {
                    alert('Insertion Successful');
                    navigate('/home')

                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h3" sx={{ my: 3 }}>Add a Branch</Typography>
            <form onSubmit={handleAddBranchSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField required name="location" onBlur={handleAddBranchBlur} style={{ width: '75%', marginTop: '18px' }} label="Place" variant="outlined" />
                <TextField required name="position" onBlur={handleAddBranchBlur} style={{ width: '75%', marginTop: '18px' }} label="Position" variant="outlined" />
                <TextField required name="time" onBlur={handleAddBranchBlur} style={{ width: '75%', marginTop: '18px' }} label="Time" variant="outlined" />
                <TextareaAutosize
                    required
                    aria-label="Description"
                    name="description"
                    style={{ width: '75%', marginTop: '18px', height: '100px', padding: '10px' }}
                    onBlur={handleAddBranchBlur}
                    placeholder="Description"
                />


                <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
            </form>
        </Container>
    );
};

export default AddBranch;