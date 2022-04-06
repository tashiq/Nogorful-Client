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
    }, [id]);
    console.log(prevInfo);
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
                    navigate('/teachers/')
                }
                else {
                    alert('An error Occured');
                }
            })
        e.preventDefault();
    }
    if (!prevInfo.phone) {
        return <CircularProgress />
    }
    else
        return (
            <Container>
                <Typography variant="h3" sx={{ my: 3 }}>Update a Teacher's Information</Typography>
                <form onSubmit={handleUpdateTeachersSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField value={prevInfo.firstName} required name="firstName" onChange={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="First Name" variant="outlined" />
                    <TextField value={prevInfo.lastName} required name="lastName" onChange={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Last Name" variant="outlined" />
                    <TextField value={prevInfo.phone} required name="phone" onChange={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Phone" variant="outlined" />
                    <TextField value={prevInfo.email} required name="email" onChange={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Email" variant="outlined" />
                    <TextField value={prevInfo.joindate} required
                        id="date"
                        label="Join Date"
                        name="joindate"
                        type="date" onChange={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }}

                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField defaultValue={prevInfo.img} name="img" onChange={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Image" variant="outlined" type="file" InputLabelProps={{
                        shrink: true,
                    }} />
                    <TextField value={prevInfo.address} required name="address" onChange={handleUpdateTeachersBlur} style={{ width: '75%', marginTop: '18px' }} label="Address" variant="outlined" />
                    <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Update</Button>
                </form>
            </Container>

        );
};

export default UpdateTeacher;