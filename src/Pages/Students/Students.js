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
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Students = () => {

    const [students, setStudents] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:4000/students')
            .then(result => {
                setStudents(result.data);
                // console.log(result.data);
            })
    }, [])
    return (
        <>
            <Navigation />
            <div className='d-flex justify-content-center my-3'>
                <TableContainer component={Paper} sx={{ width: 600 }}>
                    <Table sx={{ width: 600 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Branch</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Class</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students?.map((row) => (

                                <TableRow className=""
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.firstName + " " + row.lastName}</TableCell>
                                    <TableCell align="right">{row.branch}</TableCell>
                                    <TableCell align="right">{row.class}</TableCell>
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
