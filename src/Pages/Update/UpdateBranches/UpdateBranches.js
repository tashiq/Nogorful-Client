import { Button, CircularProgress, Container, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
const UpdateBranches = () => {
    // const [gender, setGender] = useState('');
    const [prevInfo, setPrevInfo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // get a student by that id.
    // console.log(id);
    useEffect(() => {
        fetch(`http://localhost:4000/branches/${id}`)
            .then(response => response.json())
            .then(data => setPrevInfo(data))
    }, [id]);
    console.log(prevInfo);
    const handleUpdateBranchBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...prevInfo };
        newInfo[type] = value;
        setPrevInfo(newInfo);
    }
    const handleUpdateBranchSubmit = e => {
        axios.put(`http://localhost:4000/branches/${id}`, prevInfo)
            .then(response => {
                if (response.data.affectedRows) {
                    alert("Update Operation Successful");
                    navigate('/home')
                }
            })
        e.preventDefault();
    }
    if (!prevInfo.id) {
        return <CircularProgress />
    }
    return (
        <div>
            {
                <Container>
                    <Typography variant="h3" sx={{ my: 3 }}>Update a Branch</Typography>
                    <form onSubmit={handleUpdateBranchSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <TextField required name="location" onBlur={handleUpdateBranchBlur} value={prevInfo.location} style={{ width: '75%', marginTop: '18px' }} label="Place" variant="outlined" />

                        <TextField required name="position" value={prevInfo.position} onBlur={handleUpdateBranchBlur} style={{ width: '75%', marginTop: '18px' }} label="Position" variant="outlined" />

                        <TextField required name="time" value={prevInfo.time} onBlur={handleUpdateBranchBlur} style={{ width: '75%', marginTop: '18px' }} label="Time" variant="outlined" />

                        <TextField name="img" onBlur={handleUpdateBranchBlur} value="" style={{ width: '75%', marginTop: '18px' }} label="Image" variant="outlined" type="file" InputLabelProps={{
                            shrink: true,
                        }} />
                        <TextareaAutosize
                            defaultValue={prevInfo.description}
                            required
                            aria-label="Description"
                            name="description"
                            style={{ width: '75%', marginTop: '18px', height: '100px', padding: '10px' }}
                            onBlur={handleUpdateBranchBlur}
                            placeholder="Description"
                        />


                        <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Update</Button>
                    </form>
                </Container>
            }
        </div>
    );
};

export default UpdateBranches;