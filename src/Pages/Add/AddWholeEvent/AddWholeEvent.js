import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import axios from 'axios';
const AddWholeEvent = () => {
    const [eventData, setEventData] = useState({})
    const [guestData, setGuestData] = useState([]);
    const [firstName, setFn] = useState("")
    const [lastName, setLn] = useState("")
    const [phone, setPhn] = useState("")
    const [role, setRole] = useState("")
    const handleAddguest = e => {
        const guest = { firstName, lastName, phone, role };
        if (!(firstName || lastName || phone || role) && guestData.length) {
            alert('Empty field is not allowed')
        }
        else {
            const prevData = [...guestData, guest.phone]
            axios.post('https://frozen-dawn-59766.herokuapp.com/guests', guest)
                .then(response => {
                    if (response.data.errno) {
                        alert(response.data.sqlMessage)
                    }
                    else {
                        const msg = `${guestData.length + 1} guest(s) successfully inserted`;
                        const fld = document.getElementById('msg');
                        fld.style.display = 'block'
                        fld.innerHTML = msg
                        setGuestData(prevData)
                    }
                })
        }
        setFn("")
        setLn("")
        setPhn("")
        setRole("")
        e.preventDefault();
    }
    const handleFn = e => {
        setFn(e.target.value);
    }
    const handleLn = e => {
        setLn(e.target.value);
    }
    const handlePhn = e => {
        setPhn(e.target.value);
    }
    const handleRole = e => {
        setRole(e.target.value);
    }
    const handleEventInfo = e => {
        const name = e.target.name;
        const value = e.target.value;
        const prevData = { ...eventData };
        prevData[name] = value;
        setEventData(prevData);
    }
    const handleEventSubmit = e => {
        const sent = { guests: guestData, eventData }
        axios.post('https://frozen-dawn-59766.herokuapp.com/events', sent)
            .then(response => {
                //console.log(response);
            })
    }
    return (
        <div>
            <Input required name="eventName" onBlur={handleEventInfo} style={{ width: '75%', marginTop: '18px' }} placeholder="Event Name" />

            <Input required
                id="date"
                label="Date"
                name="date"
                type="date" onBlur={handleEventInfo} style={{ width: '75%', marginTop: '18px' }}

                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Input required name="cost" onBlur={handleEventInfo} style={{ width: '75%', marginTop: '18px' }} placeholder="Cost" />
            <Input required name="place" onBlur={handleEventInfo} style={{ width: '75%', marginTop: '18px' }} placeholder="Place" />
            <Input required name="noOfAttendance" onBlur={handleEventInfo} style={{ width: '75%', marginTop: '18px' }} placeholder="Number Of Attendance" />
            <form onSubmit={handleAddguest}>
                <fieldset>
                    <legend>Guest Information</legend>
                    <div id='msg'></div>
                    <Input onChange={handleFn} value={firstName} required name="firstName" style={{ width: '75%', marginTop: '18px' }} placeholder="First Name" />
                    <Input onChange={handleLn} value={lastName} required name="lastName" style={{ width: '75%', marginTop: '18px' }} placeholder="Last Name" />
                    <Input onChange={handlePhn} value={phone} required name="phone" style={{ width: '75%', marginTop: '18px' }} placeholder="Phone" />
                    <Input onChange={handleRole} value={role} required name="role" style={{ width: '75%', marginTop: '18px' }} placeholder="Role" />
                    <Button style={{ width: '75%', marginTop: '18px' }} variant="contained" onClick={handleAddguest} type='submit'>Add the guest</Button>
                </fieldset>
            </form>
            <Button style={{ width: '75%', marginTop: '18px' }} variant="contained" onClick={handleEventSubmit} type='submit'>Submit</Button>
        </div>
    );
};

export default AddWholeEvent;