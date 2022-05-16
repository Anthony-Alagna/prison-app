import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

//Drawer Imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@material-ui/core/Divider';


type Anchor = 'right';
const drawerWidth = 600;

export default function RenderInfo() {

    const [state, setState] = React.useState({
        right: false,
    });

    const useStyles = makeStyles(theme =>
        createStyles({
            appMenu: {
                width: '100%',
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

    const information = (anchor: Anchor) => (
        <>
            
        </>
    );


    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    onClick={toggleDrawer(anchor, true)}
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {information(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}