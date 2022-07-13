import React from 'react';
import { Box, Grid, Link } from '@mui/material';

const Nav = () => {
    return (
        <Grid
            sx={{
                width: '100%',
                height: 150,
                backgroundColor: '#f44336',
                // paddingTop: 2,
                flexGrow: 1,
                display: 'inline-flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <Box>About</Box>
            <Box>My Work</Box>
            <Box
                sx={{
                    fontSize: 70,
                }}
            >
                <Link
                    href='/'
                    underline='none'
                    color='black'
                >
                    Shawn Cochran
                </Link>
            </Box>
            <Box>Resume</Box>
            <Box>Contact Me</Box>
        </Grid>
    )
}

export default Nav