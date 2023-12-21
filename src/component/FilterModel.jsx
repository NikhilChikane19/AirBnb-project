import { Box, Button, Divider, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function FilterModel() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid black',
    boxShadow: 24,
    p: 4,
  };

  const handleButtonInput = (x) => {
    console.log(x)
  }
  return (
    <>
      <Button onClick={handleOpen} sx={{ color: 'inherit' }}><FilterAltIcon />Filter</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', margin: 1.5 }}>
            Filters
          </Typography>
          <Divider />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rooms & Beds
          </Typography>
          <div style={{ marginTop: '3px' }}>
            <Typography id="modal-modal-title" variant="p" component="h4">
              Bedrooms
            </Typography>
            <div className='modal-button' >
              {[1, 2, 3, 4, 5, 6, 7].map((x) => (
                <Button variant="outlined" size="small" onClick={() => { handleButtonInput(x) }}>{x}</Button>
              ))}
            </div>
            <Typography id="modal-modal-title" variant="p" component="h4">
              Beds
            </Typography>
            <div className='modal-button'>
              {[1, 2, 3, 4, 5, 6, 7].map((x) => (
                <Button variant="outlined" size="small" onClick={() => { handleButtonInput(x) }}>{x}</Button>
              ))}
            </div>
            <Typography id="modal-modal-title" variant="p" component="h4">
              Bathrooms
            </Typography>
            <div className='modal-button'>
              {[1, 2, 3, 4, 5, 6, 7].map((x) => (
                <Button variant="outlined" size="small" onClick={() => { handleButtonInput(x) }}>{x}</Button>
              ))}
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}
