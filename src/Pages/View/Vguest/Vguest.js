import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Vguest = () => {
    const [events, setEvents] = useState([]);
    const [del, setDel] = useState(false);
    useEffect(() => {
        fetch('http://localhost:4000/guests')
            .then(res => res.json())
            .then(data => setEvents(data))
        setDel(false)
    }, [del])
    //console.log(events);
    const handleDelete = phone => {
        const ans = window.confirm('Do you wanna delete?');
        if (ans) {
            axios.delete(`http://localhost:4000/guests/${phone}`)
                .then(res => {
                    //  ?  : alert('Successful')
                    if (res.data.errno) {
                        alert(res.data.sqlMessage)
                    }
                    else {
                        const prevData = [...events];
                        prevData.filter(item => item.phone !== phone)
                        setEvents(prevData)
                        setDel(true)
                    }
                })
        }
    }
    return (
        <div>
            <TableContainer component={Paper} sx={{ width: 700 }} >
                <Table sx={{ width: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Phone</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Update</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((row) => (

                            <TableRow>
                                <TableCell align="left">{row.firstName + ' ' + row.lastName}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">{row.role || " "}</TableCell>
                                <TableCell align="left"> <Link to={`/dashboard/update/guest/${row.phone}`} style={{ textDecoration: 'none' }}><Button>Update</Button></Link> </TableCell>
                                <TableCell align="left"> <Button onClick={() => handleDelete(row.phone)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default Vguest;