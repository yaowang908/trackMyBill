import React from 'react';
import {
  Modal,
  Backdrop,
  Box,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateItem = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label='add new bill' onClick={handleOpen}>
        <AddIcon fontSize='large' sx={{ color: 'white' }} />
      </IconButton>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        open={open}
        onClose={handleClose}
        keepMounted
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Container maxWidth='md' sx={{ overflow: 'hidden' }}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: 800,
              minHeight: 800,
              background:
                'linear-gradient(180deg, #00365e 0%, #00345a 52.6%, #001d32 100%)',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant='h4'>New Item</Typography>
          </Box>
        </Container>
      </Modal>
    </>
  );
};

export default CreateItem;
