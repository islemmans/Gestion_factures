import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Modif_util  from '../Elements/Modif_util';
import Signin from '../pages/Signin';
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModif = () => {
    
    alert('hi');
  };


  return (
    <div>
      <Button variant="outlined" style={{border:'none',color:'white'}} onClick={handleClickOpen}>
        Huissier
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Signin/>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="login"
            type="login"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickOpen}>Ajouter</Button>
          <Button onClick={handleModif} >Modifier</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}