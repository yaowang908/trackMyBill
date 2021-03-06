import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import Tag from 'src/components/SubscriptionItem/Tag';
import { SubscriptionState } from 'src/features/subscriptionSlice';

// interface SubscriptionItemProps {
//   name: string;
//   billingCycle: string; //'weekly' | 'monthly' | 'quarterly' | 'yearly'
//   billingRate: string;
//   billingDate: Date; //TODO could be string every monday or something
//   currency: string; //TODO
//   endingDate?: Date; //TODO
//   startingDate: Date;
//   trailEndingDate?: Date;
// }

const SubscriptionItem = (props: SubscriptionState) => {
  const {
    name,
    billingCycle,
    billingRate,
    currency = 'USD',
    endingDate,
    startingDate,
    trailEndingDate,
  } = props;
  const [showContextMenu, setShowContextMenu] = React.useState(false);

  const getBillingCycle = (cycle: SubscriptionState['billingCycle']) => {
    switch (cycle) {
      case 'weekly':
        return 'per week';
      case 'monthly':
        return 'per month';
      case 'quarterly':
        return 'per quarter';
      case 'yearly':
        return 'per year';
      default:
        return '';
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        pb: '1em',
      }}
    >
      <Box
        sx={{
          width: '100%',
          border: '1px solid white',
          padding: '1em 2em',
          borderRadius: '0.5em',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          transformOrigin: 'center',
          transform: showContextMenu ? 'translate(-1em, 0)' : 'translate(0, 0)',
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          setShowContextMenu(!showContextMenu);
        }}
      >
        <Box>
          <Typography variant='h6'>{name}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              mr: 6,
              display: 'flex',
              flexDirection: 'column-reverse',
              padding: '0.1em',
            }}
          >
            <Typography variant='body2'>
              {billingRate} {currency} / {getBillingCycle(billingCycle)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'right',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ textAlign: 'right' }}>19 AUG</Box>
            <Tag type='Yellow' text='Trial Period'></Tag>
          </Box>
        </Box>
      </Box>
      {showContextMenu && (
        <>
          <Button sx={{ width: '4em', mr: '1em' }} variant='contained'>
            <Typography variant='body2'>Edit</Typography>
          </Button>
          <Button sx={{ width: '4em' }} variant='contained' color='error'>
            <Typography variant='body2'>DELETE</Typography>
          </Button>
        </>
      )}
    </Box>
  );
};

export default SubscriptionItem;
