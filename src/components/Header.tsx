import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import CreateItem from 'src/components/CreateItem/CreateItem';

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
      <CreateItem />
    </Box>
  );
};

export default Header;
