import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';



const Students = () => {

    const [students, setStudents] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:4000/students')
            .then(result => {
                setStudents(result.data);
            })
    }, [])
    return (
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
                        <>

                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.father}</TableCell>
                                <TableCell align="right">{row.mother}</TableCell>
                                <TableCell align="right">{row.branch}</TableCell>
                                <TableCell align="right">{row.cls}</TableCell>
                                <TableCell align="right">{row.school}</TableCell>
                            </TableRow>

                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default Students;
