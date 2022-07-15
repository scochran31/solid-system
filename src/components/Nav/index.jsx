import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';

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
            <Box>
                <Typography variant='h5'>About</Typography>
            </Box>
            <Box>
                <Typography variant='h5'>My Work</Typography>
            </Box>
            <Box>
                <Link
                    href='/'
                    underline='none'
                    color='black'
                >
                    <Typography variant='h2'>Shawn Cochran</Typography>
                </Link>
            </Box>
            <Box>
                <Typography variant='h5'>Resume</Typography>
            </Box>
            <Box>
                <Typography variant='h5'>Contact Me</Typography>
            </Box>
        </Grid>
    )
}

export default Nav