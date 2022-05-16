import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

//List Item Imports
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//Drawer Imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@material-ui/core/Divider';

//Icon Imports
import IconDashboard from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'left';
const drawerWidth = 200;

export default function TemporaryDrawer() {
    
    const [state, setState] = React.useState({
        left: false,
    });

    const useStyles = makeStyles(theme =>
        createStyles({
            appMenu: {
                width: '100%',
            },
            navList: {
                width: drawerWidth,
            },
            menuItem: {
                width: drawerWidth,
            },
            menuItemIcon: {
                color: '#00ADB5',
            },
            menuIcon:{
                color: '#00ADB5',
            },
        }),
    )
    const classes = useStyles()

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <>
            <List component="nav" className={classes.appMenu} disablePadding>
                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <IconDashboard />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <AutoAwesomeMotionIcon />
                    </ListItemIcon>
                    <ListItemText primary="References" />
                </ListItem>

                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>

                <ListItem button className={classes.menuItem}>
                    <ListItemIcon className={classes.menuItemIcon}>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </>);



    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}