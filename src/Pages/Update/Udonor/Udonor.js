import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Udonor = () => {
    const { phone } = useParams();
    const [donor, setDonor] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/donor/${phone}`)
            .then(res => res.json())
            .then(data => setDonor(data[0]))
    }, [phone])
    const handleOcodSubmit = e => {
        axios.put(`http://localhost:4000/donor/${phone}`, donor)
            .then(res => {
                if (res.data.errno) {
                    alert(res.data.sqlMessage);
                }
                else {
                    alert('Successful')
                }
            })
        e.preventDefault()
    }
    const handleAddDonorOcodChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const prevData = { ...donor };
        prevData[name] = value;
        setDonor(prevData)
    }
    return (
        <div>
            <fieldset>
                <legend>Donors Information</legend>
                <TextField required value={donor.firstName} name="firstName" onChange={handleAddDonorOcodChange} style={{ width: '75%', marginTop: '18px' }} label="First Name" variant="outlined" />
                <TextField required value={donor.lastName} name="lastName" onChange={handleAddDonorOcodChange} style={{ width: '75%', marginTop: '18px' }} label="Last Name" variant="outlined" />
                <TextField required value={donor.phone} name="phone" onChange={handleAddDonorOcodChange} style={{ width: '75%', marginTop: '18px' }} label="Phone" variant="outlined" />
                <TextField required value={donor.salary} name="salary" onChange={handleAddDonorOcodChange} style={{ width: '75%', marginTop: '18px' }} label="Salary" variant="outlined" />
                <Button style={{ width: '75%', marginTop: '18px' }} variant='contained' onClick={handleOcodSubmit}>Update Donor</Button>
            </fieldset>
        </div>
    );
};

export default Udonor;