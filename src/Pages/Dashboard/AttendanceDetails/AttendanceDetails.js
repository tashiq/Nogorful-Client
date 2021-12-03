import {
    FormControl, InputLabel, MenuItem, Select, TextField, Typography

} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, { useEffect, useState } from 'react';

const AttendanceDetails = () => {
    const [search, setSearch] = useState('');
    const [details, setDetails] = useState([]);
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const handleSearchChange = e => {
        setSearch(e.target.value);
    }
    const handleChange = (event) => {
        // console.log(event.target.value);
        setType(event.target.value);
    };
    const handleDate = e => {
        setDate(e.target.value)
    }
    useEffect(() => {
        fetch(`http://localhost:4000/attendance?${type}=${search}&&date=${date}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [search, type, date])
    return (
        <>
            <Typography variant="h4" sx={{ mb: 4 }}>Attendance Details </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
                <TextField style={{ width: '35%' }} id="outlined-basic" label="Date" onChange={handleDate} sx={{ mb: 3 }} variant="outlined" type="date" InputLabelProps={{
                    shrink: true,
                }} />
                <FormControl sx={{ mb: 3 }} style={{ width: '35%' }}>
                    <InputLabel id="demo-simple-select-label">Search By</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Search By"
                        onChange={handleChange}
                    >
                        <MenuItem value="teacher">Teacher</MenuItem>
                        <MenuItem value="student">Student</MenuItem>
                    </Select>
                </FormControl>
                <TextField style={{ width: '35%' }} sx={{ mb: 3 }} id="outlined-basic" label={type === 'student' ? "Student ID" : "Teacher ID"} onChange={handleSearchChange} variant="outlined"
                    type={"text"} />
                <i className="fas fa-search" style={{ fontSize: '20px', padding: '17px', borderRadius: '5px', cursor: 'pointer', border: '1px solid' }}></i>
            </div>


            {/* show the result  */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Student ID</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Student Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Teacher ID</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Teacher Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {details?.map((row) => (

                            <TableRow className=""
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.studentId}</TableCell>
                                <TableCell align="right">{row.student}</TableCell>
                                <TableCell align="right">{row.teacherId}</TableCell>
                                <TableCell align="right">{row.teacher}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default AttendanceDetails;