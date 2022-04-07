import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Vguest = () => {
    const [searchBtnToggle, setSearchBtnToggle] = React.useState(true);
    const [guests, setGuests] = useState([]);
    const [del, setDel] = useState(false);
    useEffect(() => {
        fetch('http://localhost:4000/guests')
            .then(res => res.json())
            .then(data => setGuests(data))

        setDel(false)
    }, [del])
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
                        const prevData = [...guests];
                        prevData.filter(item => item.phone !== phone)
                        setGuests(prevData)
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
        axios.get(`http://localhost:4000/guests?key=${key}`)
            .then(result => {
                setGuests(result.data);
                // console.log(result.data);
            })
    }
    return (
        <div>
            <TableContainer component={Paper} sx={{ width: 700 }} >
                {
                    !searchBtnToggle &&
                    <TextField name="search" style={{ width: '100%', marginTop: '10px' }} label="Search by Guest's Name" onChange={doSomeCrap} variant="outlined" />
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
                            <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Update</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {guests.map((row) => (

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
                {
                    !guests.length &&
                    <div style={{ color: '#222', textAlign: 'center', fontSize: '45px', fontFamily: 'sans-serif' }}>No Data Found</div>
                }
            </TableContainer>
        </div >
    );
};

export default Vguest;