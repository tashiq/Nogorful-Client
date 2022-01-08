import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [add, setAdd] = useState(null);
    const [view, setUpdate] = useState(null)
    const viewHandle = e => {
        setUpdate(e.target.value);
        setAdd(null)
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const addHandle = e => {
        setAdd(e.target.value)
        setUpdate("")
    }
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button >
                    <Link to='/home' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Home</Link>
                </ListItem>
                <FormControl style={{ width: '100%', marginTop: '10px' }} >
                    <InputLabel id="demo-simple-select-label">ADD</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={add}
                        label="ADD"
                        name="ADD"
                        onChange={addHandle}
                    >
                        <MenuItem value="addStudent"><ListItem button style={{ padding: '0' }} >
                            <Link to='addstudent' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Student</Link>
                        </ListItem></MenuItem>
                        <MenuItem value="addTeacher"><ListItem button style={{ padding: '0' }} >
                            <Link to='addteacher' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Teacher</Link>
                        </ListItem></MenuItem>
                        <MenuItem value="OCOD"><ListItem button style={{ padding: '0' }} >
                            <Link to='addocod' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>OCOD information</Link>
                        </ListItem></MenuItem>
                        <MenuItem value="addEvent"><ListItem button style={{ padding: '0' }} >
                            <Link to='addevent' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Event</Link>
                        </ListItem></MenuItem>
                        <MenuItem value="addBranch"><ListItem button style={{ padding: '0' }}>
                            <Link to='addbranch' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Branch</Link>
                        </ListItem></MenuItem>
                        <MenuItem value="addwholeevent"><ListItem button style={{ padding: '0' }}>
                            <Link to='cmpltevent' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Full Event Information</Link>
                        </ListItem></MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{ width: '100%', marginTop: '10px' }} >
                    <InputLabel id="demo-simple-select-label">View</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={view}
                        label="update"
                        name="update"
                        onChange={viewHandle}
                    >
                        <MenuItem value="viewChild">
                            <ListItem button style={{ padding: '0' }} >
                                <Link to='view/child/' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Children</Link>
                            </ListItem>
                        </MenuItem>
                        <MenuItem value="viewDonor">
                            <ListItem button style={{ padding: '0' }} >
                                <Link to='view/donor/' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Donors</Link>
                            </ListItem>
                        </MenuItem>
                        <MenuItem value="viewGuest">
                            <ListItem button style={{ padding: '0' }} >
                                <Link to='view/guest/' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Guests</Link>
                            </ListItem>
                        </MenuItem>
                        <MenuItem value="viewEvent">
                            <ListItem button style={{ padding: '0' }} >
                                <Link to='view/event/' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Events</Link>
                            </ListItem>
                        </MenuItem>
                        <MenuItem value="viewWholeEvent">
                            <ListItem button style={{ padding: '0' }} >
                                <Link to='view/wholeevent/' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Event Information</Link>
                            </ListItem>
                        </MenuItem>
                        {/* update teacher, student, branch, child, donor, guest, event */}
                    </Select>
                </FormControl>

                <ListItem button >

                </ListItem>


                <ListItem button >
                    <Link to='makeadmin' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Make An Admin</Link>
                </ListItem>
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{ height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                style={{ overflow: 'visible' }}
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >'<i className="fas fa-hamburger"></i>'
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                style={{ overflow: 'hidden', zIndex: '0!important' }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
