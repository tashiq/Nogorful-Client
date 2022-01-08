import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Donors = () => {
    const [children, setChildren] = useState([]);
    const [events, setEvents] = useState([]);
    const [del, setDel] = useState(false);
    useEffect(() => {
        fetch('https://frozen-dawn-59766.herokuapp.com/donor')
            .then(res => res.json())
            .then(data => setChildren(data))
        setDel(false)
    }, [del])
    const handleDelete = phone => {
        const ans = window.confirm('Do you wanna delete?');
        if (ans) {
            axios.delete(`https://frozen-dawn-59766.herokuapp.com/donor/${phone}`)
                .then(res => {
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
    //console.log(children);
    return (
        <div>
            <TableContainer component={Paper} sx={{ width: 700 }} >
                <Table sx={{ width: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Phone</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Salary</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Update</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {children.map((row) => (

                            <TableRow className=""
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.firstName + ' ' + row.lastName}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">{row.salary || " "}</TableCell>
                                <TableCell align="left"> <Link to={`/dashboard/update/donor/${row.phone}`} style={{ textDecoration: 'none' }}><Button>Update</Button></Link> </TableCell>
                                <TableCell align="left"> <Button onClick={() => handleDelete(row.phone)}>Delete</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Donors;