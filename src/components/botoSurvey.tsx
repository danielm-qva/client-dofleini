import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

function botoSurvey() {
    const toggleDrawer = () =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
        };


    return (
        <div>

            <Box
                role="presentation"
                onClick={toggleDrawer()}
                onKeyDown={toggleDrawer()}
            >
                <Divider />

            </Box>

            <React.Fragment key="right">
                <Button onClick={toggleDrawer()}>Buttom</Button>
                <SwipeableDrawer
                    anchor={"right"}
                    open={true}
                    onClose={toggleDrawer()}
                    onOpen={toggleDrawer()}
                >
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}

export default botoSurvey;