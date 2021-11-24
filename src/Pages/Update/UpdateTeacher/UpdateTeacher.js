import { Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const UpdateTeacher = () => {
    const [prevInfo, setPrevInfo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // get a student by that id.

    useEffect(() => {
        fetch(`http://localhost:4000/teachers/${id}`)
            .then(response => response.json())
            .then(data => setPrevInfo(data))
    }, []);
    const handleUpdateTeachersBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...prevInfo };
        newInfo[type] = value;
        setPrevInfo(newInfo);
    }
    const handleUpdateTeachersSubmit = e => {
        axios.put(`http://localhost:4000/teachers/${id}`, prevInfo)
            .then(response => {
                if (response.data.affectedRows) {
                    alert("Update Operation Successful");
                    navigate('/teachers/' + id)
                }
                else {
                    alert('An error Occured');
                }
            })
        e.preventDefault();
    }
    if (!prevInfo.id) {
        return <CircularProgress />
    }
    else
        return (
            <Container>
                <Typography variant="h3" sx={{ my: 3 }}>Update a Teacher's Information</Typography>
                <form onSubmit={handleUpdateTeachersSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField defaultValue={prevInfo.name} required name="name" onBlur={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Name" variant="outlined" />
                    <TextField defaultValue={prevInfo.phone} required name="phone" onBlur={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Phone" variant="outlined" />
                    <TextField defaultValue={prevInfo.email} required name="email" onBlur={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Email" variant="outlined" />
                    <TextField value={prevInfo.joined.slice(0, 10)} required
                        id="date"
                        label="Join Date"
                        name="joined"
                        type="date" onBlur={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }}

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
                            value={prevInfo.branch}
                            label="Branch"
                            name="branch"
                            onChange={handleUpdateTeachersBlur}
                        >
                            <MenuItem value="Sholoshahar">Sholoshahar</MenuItem>
                            <MenuItem value="Cantonment">Cantonment</MenuItem>
                            <MenuItem value="Agrabad">Agrabad</MenuItem>
                            <MenuItem value="CRB">CRB</MenuItem>
                            <MenuItem value="Patiya">Patiya</MenuItem>
                            <MenuItem value="Patiya">DC hill</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField defaultValue={prevInfo.img} name="img" onBlur={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Image" variant="outlined" type="file" InputLabelProps={{
                        shrink: true,
                    }} />
                    <TextField defaultValue={prevInfo.degree} required name="degree" onBlur={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Highest Degree" variant="outlined" />
                    <TextField defaultValue={prevInfo.institution} required name="institution" onBlur={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Institution" variant="outlined" />
                    <TextField defaultValue={prevInfo.address} required name="address" onBlur={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Address" variant="outlined" />
                    {/* <TextField defaultValue={prevInfo.} required name="gender" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Gender" variant="outlined" /> */}
                    <FormControl style={{ width: '75%', marginTop: '18px' }} >
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={prevInfo.gender}
                            label="Gender"
                            name="gender"
                            onChange={handleUpdateTeachersBlur}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Update</Button>
                </form>
            </Container>

        );
};

export default UpdateTeacher;