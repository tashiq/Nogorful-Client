import { Button, Container, FormControl, Typography, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const [addEventData, setAddEventData] = useState({});
    const [guestData, setGuestData] = useState([]);
    const [guest, setGuest] = useState({});
    const handleAddEventBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...addEventData };
        newInfo[type] = value;
        setAddEventData(newInfo);
    }
    const handleAddEventSubmit = e => {
        // console.log(addEventData, guestData);
        const newInfo = { event: addEventData, guests: guestData }
        axios.post('http://localhost:4000/events', newInfo)
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
    const handleAddGuestBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const newInfo = { ...guest };
        newInfo[type] = value;
        setGuest(newInfo);
        // console.log(guest);
    }
    const handleAddGuest = e => {
        const newInfo = [...guestData];
        newInfo.push(guest);
        setGuest({});
        setGuestData(newInfo);
        e.target.reset();
        e.preventDefault();
    }
    return (
        <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ my: 3 }}>Add a Event Description</Typography>
            <form >
                <FormControl sx={{ width: '100%' }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                ><TextField required name="eventName" onBlur={handleAddEventBlur} style={{ width: '75%', marginTop: '18px' }} label="Event Name" variant="outlined" />
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
                    /> </FormControl>

            </form>
            <Typography sx={{ my: 3 }} variant="h3">Guest Information</Typography>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleAddGuest} >
                <TextField required name="gName" onBlur={handleAddGuestBlur} style={{ width: '75%', marginTop: '18px' }} label="Guest Name" variant="outlined" />
                <TextField required name="gPhone" onBlur={handleAddGuestBlur} style={{ width: '75%', marginTop: '18px' }} label="Guest Phone Number" variant="outlined" />
                <TextField name="gRole" onBlur={handleAddGuestBlur} style={{ width: '75%', marginTop: '18px' }} label="Guest's Role" variant="outlined" />
                <Button variant="contained" sx={{ mt: 2 }} type="submit">Add This Guest &#10004; </Button>
            </form>
            <Button variant="contained" onClick={handleAddEventSubmit} style={{ width: '75%', marginTop: '18px', marginBottom: '40px' }} type="submit">Add</Button>
        </Container>
    );
};

export default AddEvent;