import React from 'react';
import { Box, Typography } from '@mui/material';

const SubscriptionItem = () => {
  return (
    <Box
      sx={{
        border: '1px solid white',
        padding: '1em 2em',
        borderRadius: '0.5em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant='h6'>Adobe Creative Cloud</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ mr: 6 }}>$129.56 / per year</Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box>19 AUG</Box>
          <Box>Trial Period</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubscriptionItem;
