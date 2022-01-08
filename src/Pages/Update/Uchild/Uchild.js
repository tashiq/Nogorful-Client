import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Uchild = () => {
    const { id } = useParams();
    const [child, setChild] = useState();
    useEffect(() => {
        fetch(`https://frozen-dawn-59766.herokuapp.com/child/${id}`)
            .then(res => res.json())
            .then(data => setChild(data[0]))
    }, [id])

    const handleOcodSubmit = e => {
        axios.put(`https://frozen-dawn-59766.herokuapp.com/child/${id}`, child)
            .then(res => {
                if (res.data.affectedRows) {
                    alert('Successful')
                }
                else {
                    alert(res.data.sqlMessage)
                }
            })
        e.preventDefault()
    }
    const handleUpdateOcodChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const prevData = { ...child }
        prevData[name] = value;
        setChild(prevData)
    }
    return (
        <div>
            <form onSubmit={handleOcodSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {
                    child?.firstName &&
                    <fieldset>
                        <legend>Child's Information</legend>
                        <TextField required value={child.firstName} name="firstName" onChange={handleUpdateOcodChange} style={{ width: '75%', marginTop: '18px' }} label="First Name" variant="outlined" />
                        <TextField required value={child.lastName} name="lastName" onChange={handleUpdateOcodChange} style={{ width: '75%', marginTop: '18px' }} label="Last Name" variant="outlined" />
                        <TextField required value={child.parentsPhone} name="parentsPhone" onChange={handleUpdateOcodChange} style={{ width: '75%', marginTop: '18px' }} label="Parents Phone" variant="outlined" />
                        <TextField required value={child.fatherFirstName} name="fatherFirstName" onChange={handleUpdateOcodChange} style={{ width: '75%', marginTop: '18px' }} label="Father's First Name" variant="outlined" />
                        <TextField required value={child.fatherLastName} name="fatherLastName" onChange={handleUpdateOcodChange} style={{ width: '75%', marginTop: '18px' }} label="Father's Last Name" variant="outlined" />
                        <TextField required value={child.address} name="address" onChange={handleUpdateOcodChange} style={{ width: '75%', marginTop: '18px' }} label="Address" variant="outlined" />
                        <Button onClick={handleOcodSubmit} variant="contained" style={{ width: '75%', marginTop: '18px' }}>Submit</Button>
                    </fieldset>

                }
            </form>
        </div>
    );
};

export default Uchild;