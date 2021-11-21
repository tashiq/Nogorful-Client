import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
const Branch = ({ info }) => {
    return (

        <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 650 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={info.img}
                        alt={info.location}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {info.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Branch;