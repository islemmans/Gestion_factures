import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TaskForm from "./task/TaskForm";
import TasksList from "./task/TasksList";

export default function  Typedossier() {
  const [open, setOpen] = React.useState(false);
  const [tasks, setTasks] = useState([
    
  ]);

  const addTask = (text) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  const toggleTask = (id) => {
    const realTask = tasks.find((t) => t.id === id);
    const index = tasks.findIndex((t) => t.id === id);
    const taskCopy = { ...realTask };
    const tasksListCopy = [...tasks];

    taskCopy.done = !taskCopy.done;
    tasksListCopy[index] = taskCopy;
    setTasks(tasksListCopy);
  };
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
      <Button  variant="outlined" style={{border:'none',color:'white',marginLeft: '0px', marginTop: '0px', margin:"0px"}} onClick={handleClickOpen}>
    
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <DialogActions>
          <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "200px",width:"3px"}} >X</Button>
        </DialogActions>
      <DialogTitle style={{color:"red"}}>Listes de type dossier</DialogTitle>
        <DialogTitle>Ibelle</DialogTitle>
        <DialogContent>
        
        <TasksList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
         <TaskForm addTask={addTask}>
          
          </TaskForm>

        </DialogContent>
       
      </Dialog>
    </div>
  );
}