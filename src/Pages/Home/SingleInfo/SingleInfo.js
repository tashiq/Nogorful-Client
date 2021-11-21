import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
const SingleInfo = ({ type, amount }) => {
    return (
        <Paper elevation={4} sx={{}} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <Typography variant="h3">
                {amount}
            </Typography>
            <Typography variant="h6">
                {type}
            </Typography>
        </Paper>
    );
};

export default SingleInfo;