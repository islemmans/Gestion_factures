import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Axios from 'axios' ;

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Signin from '../pages/Signin';

import { useDispatch } from "react-redux";
import { modifutil ,supputil,addutil } from "../redux/slices/User";
import { useState } from "react";


const style = {

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


function ModifModal() {

  const dispatch= useDispatch();

const [open, setOpen] =useState(false);
const [login,setlogin]=useState("");
const [id,setid]=useState("");
const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};


const handleModif=(event)=>{
  event.preventDefault();
  dispatch(modifutil(id));
  setid("");
};

return (
  <div>
    <Button variant="outlined" style={{color:'blue'}} onClick={handleClickOpen}>
      Modifier </Button>
    
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Modifier un utilisateur</DialogTitle>
      <DialogContent>
        <TextField 
          autoFocus
          margin="dense"
          id="id"
          label="ID"
          type="text"
          fullWidth
          variant="outlined"
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleModif}>Modifier</Button>
      </DialogActions>
    </Dialog>
  </div>
);
}



 /* const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Ajouter</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            voulez vous ajouter un utilisateur.
          </p>
         
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose}>Confirmer</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );*/



  function SuppModal() {

    const dispatch= useDispatch();

  const [open, setOpen] =useState(false);
const [login,setlogin]=useState("");
const [id,setid]=useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleSupp=(event)=>{
    event.preventDefault();
    dispatch(supputil(id));
    setid("");
  };

  return (
    <div>
      <Button variant="outlined" style={{color:'blue'}} onClick={handleClickOpen}>
        Supprimer </Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Supprimer un utilisateur</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            id="id"
            label="ID"
            type="text"
            fullWidth
            variant="outlined"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSupp}>Supprimer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}





function AddModal() {

    const dispatch= useDispatch();

  const [open, setOpen] =useState(false);
const [login,setlogin]=useState("");
const [password,setpassword]=useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleAjout=(event)=>{
    event.preventDefault();
    dispatch(addutil([login,password]));
    
    setlogin("");
    setpassword("");
  };

  return (
    <div>
      <Button variant="outlined" style={{color:'blue'}} onClick={handleClickOpen}>
        Ajouter  </Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un utilisateur</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
        
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="login"
            type="text"
            fullWidth
            variant="outlined"
            value={login}
            onChange={(e) => setlogin(e.target.value)}
          />
             <TextField 
            autoFocus
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAjout}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function NestedModal() {
  const [open, setOpen] =useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Utilisateur</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Liste des utilisateurs</h2>
          <p id="parent-modal-description">
            <Signin/>
          </p>
       
          <AddModal/>
          <SuppModal/>
          <ModifModal/>
        </Box>
      </Modal>
    </div>
  );
}
