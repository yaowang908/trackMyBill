import React from 'react';
import { Box, Typography } from '@mui/material';
import { yellow, orange } from '@mui/material/colors';

interface TagProps {
  type: 'Orange' | 'Yellow';
  text: string;
}

const Tag = ({ type, text }: TagProps) => {
  const backgroundColor = (type: TagProps['type']) => {
    if (type === 'Yellow') return yellow[900];
    if (type === 'Orange') return orange[900];
    return orange[600];
  };
  return (
    <Box
      sx={{
        padding: '0.1em 0.5em',
        borderRadius: '0.2em',
        backgroundColor: backgroundColor(type),
      }}
    >
      <Typography variant='body2'>{text}</Typography>
    </Box>
  );
};

export default Tag;
