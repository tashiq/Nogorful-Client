import { Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const UpdateStudent = () => {
    // const [gender, setGender] = useState('');
    const [prevInfo, setPrevInfo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/students/${id}`)
            .then(response => response.json())
            .then(data => setPrevInfo(data))
    }, [id]);
    // console.log(prevInfo);
    const handleUpdateStuBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...prevInfo };
        newInfo[type] = value;
        console.log(newInfo, value, type);
        setPrevInfo(newInfo);
        console.log(newInfo);
    }
    const handleUpdateStuSubmit = e => {
        console.log('done');
        axios.put(`http://localhost:4000/students/${id}`, prevInfo)
            .then(response => {
                if (response.data.affectedRows) {
                    alert("Update Operation Successful");
                    navigate('/students/' + id)
                }
            })
        e.preventDefault();
    }
    if (!prevInfo.sid) {
        return <CircularProgress />
    }
    else
        return (
            <Container>
                <Typography variant="h3" sx={{ my: 3 }}>Update a Student</Typography>
                <form onSubmit={handleUpdateStuSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField value={prevInfo.firstName} required name="firstName" onChange={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="First Name" variant="outlined" />
                    <TextField value={prevInfo.lastName} required name="lastName" onChange={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Last Name" variant="outlined" />
                    <TextField value={prevInfo.fatherFirstName} required name="fatherFirstName" onChange={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Father's Name" variant="outlined" />
                    <TextField value={prevInfo.fatherLastName} required name="fatherLastName" onChange={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Father's Name" variant="outlined" />

                    <FormControl style={{ width: '75%', marginTop: '18px' }} >
                        <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={prevInfo.branch}
                            label="Branch"
                            name="branch"
                            onChange={handleUpdateStuBlur}
                        >
                            <MenuItem value="Sholoshahar">Sholoshahar</MenuItem>
                            <MenuItem value="Cantonment">Cantonment</MenuItem>
                            <MenuItem value="Agrabad">Agrabad</MenuItem>
                            <MenuItem value="CRB">CRB</MenuItem>
                            <MenuItem value="Patiya">Patiya</MenuItem>
                            <MenuItem value="Patiya">DC hill</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField defaultValue={prevInfo.img} name="img" onChange={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Image" variant="outlined" type="file" InputLabelProps={{
                        shrink: true,
                    }} />
                    <TextField value={prevInfo.class} required name="class" onChange={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Class" variant="outlined" />

                    {/* <TextField defaultValue={prevInfo.} required name="gender" onChange={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Gender" variant="outlined" /> */}

                    <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} onClick={handleUpdateStuSubmit} type="submit">Update</Button>
                </form>
            </Container>

        );
};

export default UpdateStudent;