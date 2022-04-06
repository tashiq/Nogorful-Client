import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'
const MakeAdmin = () => {
    const navigate = useNavigate();
    // const emailRef = useRef();
    const [email, setEmail] = useState('')
    const adminSubmit = e => {
        // //console.log();
        fetch(`http://localhost:4000/admin?email=${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                // //console.log(data);
            })
        e.preventDefault();
        navigate('/dashboard');
    }
    const setmail = e => {
        setEmail(e.target.value)
    }
    return (
        <div>
            <form onSubmit={adminSubmit}>
                <TextField required name="email" style={{ width: '45%', marginTop: '18px' }} label="Email Address" onChange={setmail} variant="outlined" />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;