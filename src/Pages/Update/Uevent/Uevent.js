import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Uevent = () => {
    const { name } = useParams();
    const [event, setEvent] = useState({})
    useEffect(() => {
        fetch(`https://frozen-dawn-59766.herokuapp.com/event/${name}`)
            .then(res => res.json())
            .then(data => setEvent(data[0]))
    }, [name])
    const handleAddEventSubmit = e => {
        axios.put(`https://frozen-dawn-59766.herokuapp.com/event/${name}`, event)
            .then(res => {
                if (res.data.errno) {
                    alert(res.data.sqlMessage);
                }
                else {
                    alert('Successful')
                }
            })
        e.preventDefault();
    }
    const handleAddEventBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const prevData = { ...event };
        prevData[type] = value;
        setEvent(prevData)
    }
    return (
        <div>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ my: 3 }}>Add an Event</Typography>
                <form >
                    <TextField required name="name" onChange={handleAddEventBlur} style={{ width: '75%', marginTop: '18px' }} value={event.name} label="Event Name" variant="outlined" />
                    <TextareaAutosize
                        required
                        aria-label="Description"
                        value={event.description}
                        name="description"
                        style={{ width: '75%', marginTop: '18px', height: '100px', padding: '10px' }}
                        onChange={handleAddEventBlur}
                        placeholder="Description"
                    />

                    <Button variant="contained" onClick={handleAddEventSubmit} style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Update</Button>
                </form>
            </Container>
        </div>
    );
};

export default Uevent;