import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
const Branch = ({ info, dash }) => {
    return (

        <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 650, textAlign: 'center' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={info.img}
                        alt={info.location}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {info.location}
                        </Typography>
                        <Typography variant="h6" component="div">
                            Position: {info.position}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {info.description}
                        </Typography>
                        {dash &&
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/dashboard/update/branches/${info.id}`}><Button variant="contained" sx={{ my: 2 }}>Update</Button></Link>
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Branch;