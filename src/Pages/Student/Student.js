import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
const Student = ({ data }) => {
    return (
        <Grid item xs={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={data.img}
                        alt={data.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data.mail}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Student;