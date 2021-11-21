import React from 'react';
import bannerImg from '../../../images/banner.png';
import bannerBg from '../../../images/bannerBg.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundImage: `url(${bannerBg})`, backgroundBlendMode: 'darken', backgroundColor: 'rgb(48, 48, 54)', backgroundPosition: 'left', overflow: 'hidden', color: 'white' }}>
            <Container>
                <Grid container style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'

                }} spacing={{ xs: 2, md: 4 }}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>They are not street child.
                            <br /> They are <span style={{ color: '#ffff00' }}>NOGORFUL</span></Typography>
                        <Typography variant="div" color="GrayText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem unde sequi neque et blanditiis magni itaque? Non nam nisi praesentium optio facilis quod odio sunt molestiae veniam, natus veritatis.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img src={bannerImg} alt="Logo" style={{
                            width: '500px', marginTop: '20px', marginBottom: '20px'
                        }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;