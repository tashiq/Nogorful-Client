import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Donors = () => {
    const [searchBtnToggle, setSearchBtnToggle] = React.useState(true);
    const [children, setChildren] = useState([]);
    const [events, setEvents] = useState([]);
    const [del, setDel] = useState(false);
    useEffect(() => {
        fetch('http://localhost:4000/donor')
            .then(res => res.json())
            .then(data => setChildren(data))
        setDel(false)
    }, [del])
    const handleDelete = phone => {
        const ans = window.confirm('Do you wanna delete?');
        if (ans) {
            axios.delete(`http://localhost:4000/donor/${phone}`)
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
    const toggleSearch = () => {
        setSearchBtnToggle(!searchBtnToggle);
    }
    const doSomeCrap = e => {
        const key = e.target.value;
        axios.get(`http://localhost:4000/donor?key=${key}`)
            .then(result => {
                setChildren(result.data);
                // console.log(result.data);
            })
    }
    //console.log(children);
    return (
        <div>
            <TableContainer component={Paper} sx={{ width: 700 }} >
                {
                    !searchBtnToggle &&
                    <TextField name="search" style={{ width: '100%', marginTop: '10px' }} label="Search by Donor's Name" onChange={doSomeCrap} variant="outlined" />
                }
                <Table sx={{ width: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Name
                                <Button onClick={toggleSearch}>
                                    {
                                        searchBtnToggle ? <span><i className="fas search-btn fa-search"></i></span> : <span><i className="fas search-btn fa-times"></i></span>
                                    }
                                </Button>
                            </TableCell>
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
                {
                    !children.length &&
                    <div style={{ color: '#222', textAlign: 'center', fontSize: '45px', fontFamily: 'sans-serif' }}>No Data Found</div>
                }
            </TableContainer>

        </div>
    );
};

export default Donors;