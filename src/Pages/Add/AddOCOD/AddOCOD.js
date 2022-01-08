import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const AddOCOD = () => {
    const [child, setChild] = useState({})
    const [donor, setDonor] = useState({})

    const handleOcodSubmit = e => {
        axios.post('https://frozen-dawn-59766.herokuapp.com/donor', donor)
            .then(response => {
                // //console.log(response);
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else {
                    alert("Donor Added")
                }
            })


        e.preventDefault();
    }
    const handleChild = e => {
        axios.post('https://frozen-dawn-59766.herokuapp.com/child', { ...child, dPhone: donor.phone })
            .then(response => {
                if (response.data.errno) {
                    alert(response.data.sqlMessage)
                }
                else {
                    alert('Successful')
                }
            })
    }
    const handleAddOcodBlur = e => {
        const type = e.target.name;
        const value = e.target.value;
        const prevData = { ...child };
        prevData[type] = value;
        setChild(prevData)
    }
    const handleAddDonorOcodBlur = e => {
        const type = e.target.name
        const value = e.target.value;
        const prevData = { ...donor };
        prevData[type] = value;
        setDonor(prevData)
    }
    return (
        <>
            <Container>
                <Typography variant="h3" sx={{ my: 3 }}>One Child One Donor</Typography>
                <form onSubmit={handleOcodSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <fieldset>
                        <legend>Donors Information</legend>
                        <TextField required name="firstName" onBlur={handleAddDonorOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="First Name" variant="outlined" />
                        <TextField required name="lastName" onBlur={handleAddDonorOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="Last Name" variant="outlined" /><TextField required name="phone" onBlur={handleAddDonorOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="Phone" variant="outlined" />
                        <TextField required name="salary" onBlur={handleAddDonorOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="Salary" variant="outlined" />
                        <Button style={{ width: '75%', marginTop: '18px' }} variant='contained' onClick={handleOcodSubmit}>Add Donor</Button>
                    </fieldset>
                    <fieldset>
                        <legend>Child's Information</legend>
                        <TextField required name="firstName" onBlur={handleAddOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="First Name" variant="outlined" />
                        <TextField required name="lastName" onBlur={handleAddOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="Last Name" variant="outlined" /><TextField required name="parentsPhone" onBlur={handleAddOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="Parents Phone" variant="outlined" />
                        <TextField required name="fatherFirstName" onBlur={handleAddOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="Father's First Name" variant="outlined" />
                        <TextField required name="fatherLastName" onBlur={handleAddOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="Father's Last Name" variant="outlined" />
                        <TextField required name="address" onBlur={handleAddOcodBlur} style={{ width: '75%', marginTop: '18px' }} label="Address" variant="outlined" />
                        <Button onClick={handleChild} variant="contained" style={{ width: '75%', marginTop: '18px' }}>Submit</Button>
                    </fieldset>

                </form>
            </Container>
        </>
    );
};

export default AddOCOD;