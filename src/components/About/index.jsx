import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { alpha } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%',
        border: 0,
        boxShadow: 3,
        color: 'white',
        height: '.25vh',
        padding: '0, 30px',
    },
});

export default function About() {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: {
                        xs: 'center',
                        md: 'flex-start',
                    },
                    m: 3,
                    maxWidth: '.33vw',
                }}>{'About Me'}
            </Box>
        </Box>
    )
}