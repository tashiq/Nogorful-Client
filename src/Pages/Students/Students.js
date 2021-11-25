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

const Students = () => {

    const [students, setStudents] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:4000/students')
            .then(result => {
                setStudents(result.data);
                console.log(result.data);
            })
    }, [])
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Father's Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Mother's Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Branch</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Class</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">School</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((row) => (

                            <TableRow className=""
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.father}</TableCell>
                                <TableCell align="right">{row.mother}</TableCell>
                                <TableCell align="right">{row.branch}</TableCell>
                                <TableCell align="right">{row.cls}</TableCell>
                                <TableCell align="right">{row.school}</TableCell>
                                <TableCell align="left"> <Link to={`/students/${row.id}`} style={{ textDecoration: 'none' }}><Button>More</Button></Link> </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`/add/student`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" sx={{ my: 4 }}>Add A Student</Button>
                </Link>
            </div>
        </>
    );
}
export default Students;
