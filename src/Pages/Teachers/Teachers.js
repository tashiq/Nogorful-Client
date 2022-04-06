import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Navigation from '../../Pages/Shared/Navigation/Navigation'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material';
import Footer from '../Shared/Footer/Footer';

const Teachers = () => {
    const [searchBtnToggle, setSearchBtnToggle] = React.useState(true);
    const [teachers, setTeachers] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:4000/teachers')
            .then(result => {
                setTeachers(result.data);
            })
    }, [])
    const toggleSearch = () => {
        setSearchBtnToggle(!searchBtnToggle);
    }
    const doSomeCrap = e => {
        const key = e.target.value;
        axios.get(`http://localhost:4000/teachers?key=${key}`)
            .then(result => {
                setTeachers(result.data);
                //console.log(result.data);
            })
    }
    return (
        <>
            <Navigation />
            <div className="d-flex justify-content-center my-2">
                <TableContainer component={Paper} sx={{ width: 700 }} >
                    {
                        !searchBtnToggle &&
                        <TextField name="search" style={{ width: '100%', marginTop: '10px' }} label="Search by Teacher's Name" onChange={doSomeCrap} variant="outlined" />
                    }
                    <Table sx={{ width: 700 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Name
                                    <Button onClick={toggleSearch}>
                                        {
                                            searchBtnToggle ? <span><i className="fas search-btn fa-search"></i></span> : <span><i className="fas search-btn fa-times"></i></span>
                                        }
                                    </Button>
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Email</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teachers.map((row) => (

                                <TableRow className=""
                                    key={row.phone}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right" component="th" scope="row">{row.firstName + ' ' + row.lastName}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.address}</TableCell>
                                    <TableCell align="right"> <Link to={`/teachers/${row.phone}`} style={{ textDecoration: 'none' }}><Button>More</Button></Link> </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`/dashboard/addteacher`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" sx={{ my: 4 }}>Add A Teacher</Button>
                </Link>
            </div>
            <Footer />
        </>
    );
}
export default Teachers;
