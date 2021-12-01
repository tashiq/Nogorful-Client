import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Branch from '../Branch/Branch';



const Branches = ({ children }) => {
    const [branches, setBranches] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/branches')
            .then(res => res.json())
            .then(data => setBranches(data))

    }, [])
    return (
        <Container id="branches">
            <Typography variant="h4" sx={{ fontWeight: 600, my: 3, color: '#363d6b' }}>Branches</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} style={{}}>
                {
                    branches.map(branch => <Branch key={branch.id} info={branch} dash={children ? true : false} />)
                }
            </Grid>
        </Container>


    );
};

export default Branches;