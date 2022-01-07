import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const AttendanceHistory = () => {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/attendance')
            .then(res => res.json())
            .then(data => setHistory(data))
    }, [])
    //console.log(history);
    return (
        <div>
            <Navigation />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Student ID</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Student Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Branch</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Teacher Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Teacher Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {history.map((row) => (

                            <TableRow className=""
                                key={row.sid}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right" component="th" scope="row">{row.sid}</TableCell>
                                <TableCell align="right" component="th" scope="row">{row.sfn + ' ' + row.sln}</TableCell>
                                <TableCell align="right">{row.branch}</TableCell>
                                <TableCell align="right">{row.tfn + ' ' + row.tln}</TableCell>
                                <TableCell align="right">{row.te}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer />
        </div>
    );
};

export default AttendanceHistory;