import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid white',
        height: '5em',
        padding: '0 10vw',
      }}
    >
      <Typography variant='h4' fontFamily='Lobster'>
        TrackMyBill
      </Typography>
      <IconButton aria-label='add new bill'>
        <AddIcon fontSize='large' sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
};

export default Header;
