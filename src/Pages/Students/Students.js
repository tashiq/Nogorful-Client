import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Student from '../Student/Student';
const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    return (
        <Container sx={{ my: 3 }}>
            <Grid container spacing={2}>
                {
                    students.map(student => <Student key={student._id} data={student}></Student>)
                }
            </Grid>
        </Container>
    );
};

export default Students;