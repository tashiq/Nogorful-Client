import { Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from 'moment';


const UpdateStudent = () => {
    const [gender, setGender] = useState('');
    const [prevInfo, setPrevInfo] = useState({});
    // const { id } = useParams();

    // get a student by that id.
    const id = 3;
    useEffect(() => {
        axios.get(`http://localhost:4000/students/${id}`)
            .then(response => {
                const data = response.data;
                const date = data.addmission;
                const str = date.slice(0, 10);
                data.addmission = str;
                setPrevInfo(data);


                // if (response.data[0].addmission) {
                //     const newInfo = { ...prevInfo };
                //     if (prevInfo.addmission) {
                //         const date = prevInfo.addmission;
                //         newInfo.addmission = date.slice(0, 10);
                //         setPrevInfo(newInfo);
                //     }
                //     // newInfo.addmission = date.slice(0, 10);
                //     // setPrevInfo(newInfo)
                // }
            })
    }, []);
    const handleUpdateStuBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...prevInfo };
        newInfo[type] = value;
        setPrevInfo(newInfo);
    }
    const handleGenderChange = e => {
        setGender(e.target.value);
        const newInfo = { ...prevInfo };
        newInfo['gender'] = e.target.value;
        setPrevInfo(newInfo);
    }
    const handleUpdateStuSubmit = e => {
        console.log(prevInfo);
        axios.put(`http://localhost:4000/students/${id}`, prevInfo)
            .then(response => {
                console.log(response.data);
            })
        e.preventDefault();
    }
    if (!prevInfo.id) {
        return <CircularProgress />
    }
    else
        return (
            <Container>
                <Typography variant="h3" sx={{ my: 3 }}>Update a Student</Typography>
                <form onSubmit={handleUpdateStuSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField defaultValue={prevInfo.name} required name="name" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Name" variant="outlined" />
                    <TextField defaultValue={prevInfo.father} required name="father" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Father's Name" variant="outlined" />
                    <TextField defaultValue={prevInfo.mother} required name="mother" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Mother's Name" variant="outlined" />
                    <TextField value={prevInfo.addmission} required
                        id="date"
                        label="Addmission Date"
                        name="addmission"
                        type="date" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }}

                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField defaultValue={prevInfo.img} name="img" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Image" variant="outlined" type="file" InputLabelProps={{
                        shrink: true,
                    }} />
                    <TextField defaultValue={prevInfo.cls} required name="cls" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Class" variant="outlined" />
                    <TextField defaultValue={prevInfo.school} required name="school" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="School" variant="outlined" />
                    <TextField defaultValue={prevInfo.address} required name="address" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Address" variant="outlined" />
                    {/* <TextField defaultValue={prevInfo.} required name="gender" onBlur={handleAddStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Gender" variant="outlined" /> */}
                    <FormControl style={{ width: '75%', marginTop: '18px' }} >
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={prevInfo.gender}
                            label="Gender"
                            name="gender"
                            onChange={handleGenderChange}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField defaultValue={prevInfo.parentsJob} name="parentsJob" onBlur={handleUpdateStuBlur} style={{ width: '75%', marginTop: '18px' }} label="Parents Occupation" variant="outlined" />

                    <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
                </form>
            </Container>

        );
};

export default UpdateStudent;