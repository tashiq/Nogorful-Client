import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Chilren = () => {
    const [del, setDel] = useState(false);
    const [events, setEvents] = useState({});
    const [children, setChildren] = useState([]);
    useEffect(() => {
        fetch('https://frozen-dawn-59766.herokuapp.com/ocod')
            .then(res => res.json())
            .then(data => setChildren(data))
    }, [del])
    const handleDelete = id => {
        const ans = window.confirm('Do you wanna delete?');
        if (ans) {
            axios.delete(`https://frozen-dawn-59766.herokuapp.com/child/${id}`)
                .then(res => {
                    if (res.data.errno) {
                        alert(res.data.sqlMessage)
                    }
                    else {
                        const prevData = [...events];
                        prevData.filter(item => item.id !== id)
                        setEvents(prevData)
                        setDel(true)
                    }
                })
        }
    }
    //console.log(children);
    return (
        <div>
            <TableContainer component={Paper} sx={{ minWidth: 700 }} >
                <Table sx={{ minWidth: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Father's Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Parent's Phone</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Address</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Donor Name</TableCell>
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
                                <TableCell component="th" scope="row">{row.fatherFirstName + ' ' + row.fatherLastName}</TableCell>
                                <TableCell align="left">{row.parentsPhone}</TableCell>
                                <TableCell align="left">{row.address || " "}</TableCell>
                                <TableCell align="left">{row.dfn + " " + row.dln}</TableCell>
                                <TableCell align="left"> <Link to={`/dashboard/update/children/${row.id}`} style={{ textDecoration: 'none' }}><Button>Update</Button></Link> </TableCell>
                                <TableCell align="left"> <Button onClick={() => handleDelete(row.id)}>Delete</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Chilren;