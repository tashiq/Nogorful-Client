import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Uguest = () => {
    const { phone } = useParams();
    const [guest, setGuest] = useState({});
    useEffect(() => {
        fetch(`https://frozen-dawn-59766.herokuapp.com/guest/${phone}`)
            .then(res => res.json())
            .then(data => setGuest(data[0]))
    }, [phone])
    //console.log(guest);
    const handleAddguest = e => {
        axios.put(`https://frozen-dawn-59766.herokuapp.com/guest/${phone}`, guest)
            .then(res => {
                if (res.data.errno) {
                    alert(res.data.sqlMessage)
                }
                else {
                    alert('Successful')
                }
            })
        e.preventDefault()
    }
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const prevData = { ...guest };
        prevData[name] = value;
        setGuest(prevData);
    }
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Guest Information</legend>
                    <div id='msg'></div>
                    <TextField label="First Name" onChange={handleChange} value={guest.firstName} required name="firstName" style={{ width: '75%', marginTop: '18px' }} />
                    <TextField label="Last Name" onChange={handleChange} value={guest.lastName} required name="lastName" style={{ width: '75%', marginTop: '18px' }} />
                    <TextField label="Phone" onChange={handleChange} value={guest.phone} required name="phone" style={{ width: '75%', marginTop: '18px' }} />
                    <TextField label="Role" onChange={handleChange} value={guest.role} required name="role" style={{ width: '75%', marginTop: '18px' }} />
                    <Button style={{ width: '75%', marginTop: '18px' }} variant="contained" onClick={handleAddguest} type='submit'>Add the guest</Button>
                </fieldset>
            </form>
        </div>
    );
};

export default Uguest;