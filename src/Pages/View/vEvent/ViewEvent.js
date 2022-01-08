import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const ViewEvent = () => {
    const [event, setEvent] = useState([]);
    const [del, setDel] = useState(false);
    useEffect(() => {
        fetch('https://frozen-dawn-59766.herokuapp.com/event')
            .then(res => res.json())
            .then(data => setEvent(data))
        setDel(false)
    }, [del])
    //console.log(event);
    const handleDelete = name => {
        const ans = window.confirm('Do you wanna delete?');
        if (ans) {
            axios.delete(`https://frozen-dawn-59766.herokuapp.com/event/${name}`)
                .then(res => {
                    if (res.data.errno) {
                        alert(res.data.sqlMessage)
                    }
                    else {
                        const prevData = [...event];
                        prevData.filter(item => item.name !== name)
                        setEvent(prevData)
                        setDel(true)
                    }
                })
        }
    }
    return (
        <div>
            <Typography variant='h5'>Events</Typography>
            <Grid container spacing={2}>
                {event.map((row) => (

                    <Grid item xs={12} md={6}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent style={{ padding: '0' }}>

                                <Typography variant="h5" component="div" style={{ backgroundColor: '#98f5b1', margin: '0', padding: '10px 20px' }}>
                                    {
                                        row.name
                                    }
                                </Typography>

                                <Typography variant="body2" style={{ padding: '10px 20px', fontSize: '17px', backgroundColor: '#f0f2f0' }}>
                                    {
                                        row.description
                                    }
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><Link to={`/dashboard/update/event/${row.name}`}>Update</Link></Button>
                                <Button size="small" onClick={() => handleDelete(row.name)}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ViewEvent;