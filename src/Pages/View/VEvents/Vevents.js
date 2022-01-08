import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Vevents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://frozen-dawn-59766.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    //console.log(events);
    return (
        <div>
            <TableContainer component={Paper} sx={{ minWidth: 700 }} >
                <Table sx={{ minWidth: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Event Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Place</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Cost</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Attendance</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Guest Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((row) => (

                            <TableRow className=""
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.eventName}</TableCell>
                                <TableCell align="left">{row.place}</TableCell>
                                <TableCell align="left">{row.cost || " "}</TableCell>
                                <TableCell align="left">{row.noOfAttendance || " "}</TableCell>
                                <TableCell align="left">{row.firstName + ' ' + row.lastName}</TableCell>
                                <TableCell align="left">{row.role || " "}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Vevents;