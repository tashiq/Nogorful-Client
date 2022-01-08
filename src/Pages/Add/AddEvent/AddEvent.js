import { Button, Container, FormControl, Typography, TextField, TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
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
        // //console.log(addEventData, guestData);
        axios.post('https://frozen-dawn-59766.herokuapp.com/event', addEventData)
            .then(response => {
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else if (response.data.insertId) {
                    alert('Insertion Successful');
                    navigate('/dashboard')

                }
            })
        e.preventDefault();
    }

    return (
        <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ my: 3 }}>Add an Event</Typography>
            <form >
                <TextField required name="eventName" onBlur={handleAddEventBlur} style={{ width: '75%', marginTop: '18px' }} label="Event Name" variant="outlined" />
                <TextareaAutosize
                    required
                    aria-label="Description"
                    name="description"
                    style={{ width: '75%', marginTop: '18px', height: '100px', padding: '10px' }}
                    onBlur={handleAddEventBlur}
                    placeholder="Description"
                />

                <Button variant="contained" onClick={handleAddEventSubmit} style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
            </form>
        </Container>
    );
};

export default AddEvent;