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

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button >
                    <Link to='/home' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Home</Link>
                </ListItem>
                <ListItem button >
                    <Link to='addevent' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Add Event</Link>
                </ListItem>
                <ListItem button >
                    <Link to='addbranch' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Add Branch</Link>
                </ListItem>
                <ListItem button >
                    <Link to='update/branches/' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Update Branch</Link>
                </ListItem>
                <ListItem button >
                    <Link to='addteacher' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Add Teacher</Link>
                </ListItem>
                <ListItem button >
                    <Link to='addstudent' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Add Student</Link>
                </ListItem>
                <ListItem button >
                    <Link to='attendance/details' style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>Attendance Details</Link>
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
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
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
