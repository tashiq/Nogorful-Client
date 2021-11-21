import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <Container sx={{ my: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, my: 3, color: '#363d6b' }}>Our Honourable teachers</Typography>

            <Grid container spacing={2}>
                {
                    teachers.map(teacher => <Teacher key={teacher._id} data={teacher}></Teacher>)
                }
            </Grid>
        </Container>
    );
};

export default Teachers;