import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import './Students.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Students = () => {
    const [students, setStudents] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:4000/students')
            .then(result => {
                setStudents(result.data);
                //console.log(result.data);
            })
    }, [])
    return (
        <>
            <Navigation />
            <div className='d-flex justify-content-center'>
                <TableContainer component={Paper} sx={{ width: 700 }} >
                    <Table sx={{ width: 700 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Student ID</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Class</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Branch</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>More</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((row) => (

                                <TableRow key={row.sid}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.sid}</TableCell>
                                    <TableCell align="left">{row.firstName + ' ' + row.lastName}</TableCell>
                                    <TableCell align="left">{row.class}</TableCell>
                                    <TableCell align="left">{row.branch || " "}</TableCell>
                                    <TableCell align="left"> <Link to={`/students/${row.sid}`} style={{ textDecoration: 'none' }}><Button>More</Button></Link> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`/dashboard/addstudent`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" sx={{ my: 4 }}>Add A Student</Button>
                </Link>
            </div>
            <Footer />
        </>
    );
}
export default Students;
