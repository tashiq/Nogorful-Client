import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';


const Events = () => {
    const [events, setEvents] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:4000/events')
    //         .then(res => res.json())
    //         .then(data => setEvents(data))
    // }, [])
    return (
        <Container sx={{ my: 3 }} id='projects'>
            <Typography variant="h4" sx={{ fontWeight: 600, my: 3, color: '#363d6b' }}>Projects</Typography>

            <Grid container spacing={2}>
                {
                    //events?.map(event => <Event key={event._id} data={event}></Event>)
                }
            </Grid>
        </Container>
    );
};

export default Events;