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

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const drawerWidth = 200;

export default function TemporaryDrawer() {
    
    const [state, setState] = React.useState({
        top: false,
        left: true,
        bottom: false,
        right: false,
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
                color: '#97c05c',
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
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            ></Box>
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
            {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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