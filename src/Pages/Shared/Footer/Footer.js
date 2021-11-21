import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <Box className='make-center'>
                <div>
                    <Typography variant="h5">
                        Locations
                    </Typography>
                    <ul>
                        <li>Sholashahar</li>
                        <li>Cantonment</li>
                        <li>Agrabad</li>
                        <li>Patiya</li>
                        <li>DC hill</li>
                    </ul>
                </div>
                <div>
                    <Typography variant="h5">
                        Projects
                    </Typography>
                    <ul>
                        <li>One Child One Donor</li>
                        <li>Eid food pack</li>
                        <li>Holiday School</li>
                        <li>Winter Dress Distribution</li>
                    </ul>
                </div>
                <div>
                    <Typography variant="h5">Social Links</Typography>
                    <ul style={{ display: 'flex', gap: '12px' }}>
                        <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/Nogorful" style={{ color: 'white', textDecoration: 'none', fontSize: 19 }}><i className="fab fa-facebook-square"></i></a></li>
                        <li> <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQcxhFQNTVKCnZZnlCLXPkMGzStgvTsPrjWmrLsfWCLpDwjHVlhtMbpcwrGhCdhHrzsV" style={{ color: 'white', textDecoration: 'none', fontSize: 19 }}><i class="fas fa-envelope"></i></a></li>
                        <li><i class="fas fa-phone" style={{ color: 'white', textDecoration: 'none', fontSize: 16 }}></i> 01974261654</li>
                    </ul>
                </div>
            </Box>
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                Copyright &copy;2021 fahim foisal
            </Typography>
        </div>
    );
};

export default Footer;