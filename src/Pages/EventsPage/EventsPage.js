import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const Event = () => {
    const [addEventData, setAddEventData] = useState({});
    const navigate = useNavigate()
    const handleAddEventBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addEventData };
        newInfo[type] = value;
        setAddEventData(newInfo);
    }
    const handleAddEventSubmit = e => {
        console.log(addEventData);
        axios.post('http://localhost:4000/events', addEventData)
            .then(response => {
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else if (response.data.insertId) {
                    alert('Insertion Successful');
                    // navigate('/teachers')

                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h3" sx={{ my: 3 }}>Add a Event Description</Typography>
            <form onSubmit={handleAddEventSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField required name="eventName" onBlur={handleAddEventBlur} style={{ width: '75%', marginTop: '18px' }} label="Event Name" variant="outlined" />
                <TextField name="place" onBlur={handleAddEventBlur} style={{ width: '75%', marginTop: '18px' }} label="Event Place" variant="outlined" />

                <TextField required
                    id="date"
                    label="Event Date"
                    name="date"
                    type="date" onBlur={handleAddEventBlur} style={{ width: '75%', marginTop: '18px' }}

                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl sx={{ width: '75%' }}>
                    <TextField required name="gName" onBlur={handleAddEventBlur} style={{ width: '100%', marginTop: '18px' }} label="Guest Name" variant="outlined" />
                    <TextField required name="gPhone" onBlur={handleAddEventBlur} style={{ width: '100%', marginTop: '18px' }} label="Guest Phone Number" variant="outlined" />
                    <TextField required name="gRole" onBlur={handleAddEventBlur} style={{ width: '100%', marginTop: '18px' }} label="Guest's Role" variant="outlined" />
                </FormControl>


                <Button variant="contained" style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
            </form>
        </Container>
    );
};

export default Event;