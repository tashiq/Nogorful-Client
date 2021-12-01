import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Teachers = () => {

    const [teachers, setTeachers] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:4000/teachers')
            .then(result => {
                setTeachers(result.data);
            })
    }, [])
    return (
        <>
            <Navigation />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Phone</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Degree</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Institution</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Branch</TableCell>
                            <TableCell sx={{ fontWeight: 600 }} align="right">Join Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teachers.map((row) => (

                            <TableRow className=""
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.degree}</TableCell>
                                <TableCell align="right">{row.institution}</TableCell>
                                <TableCell align="right">{row.branch}</TableCell>
                                <TableCell align="right">{row.joined.slice(0, 10)}</TableCell>
                                <TableCell align="left"> <Link to={`/teachers/${row.id}`} style={{ textDecoration: 'none' }}><Button>More</Button></Link> </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
