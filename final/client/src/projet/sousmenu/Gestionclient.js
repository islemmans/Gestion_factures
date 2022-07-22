import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Button from '@mui/material/Button';
import {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import TaskForm from "./task/TaskForm";
import TasksList from "./task/TasksList";
function Gestionclient() {
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
  const [rowData, setRowData] = useState([
    {make:'aya',model:'oui',price:'2000'},
    {make:'eya',model:'oui',price:'1000'},
    {make:'aya',model:'oui',price:'2000'},
  ]);
  const [open, setOpen] = React.useState(false);
  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState([
    {field: 'make'},
    {field: 'model'},
    {field: 'price'}
  ]);

  const defaultColDef = useMemo( ()=> (
    {
      sortable: true, 
      filter: true
    }
  ));

  const cellClickedListener = useCallback( event => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);

  const buttonListener = useCallback( e => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div>
         <Button  variant="outlined" style={{border:'none',color:'white',marginLeft: '0px', marginTop: '0px', margin:"0px"}} onClick={handleClickOpen}>
    
        </Button>
        <Dialog open={open} onClose={handleClose}>
      <DialogActions>
          <Button onClick={handleClose} style={{ padding: "5px", marginLeft: "200px",width:"3px"}} >X</Button>
        </DialogActions>
   
      <div className="ag-theme-alpine" style={{width: 500, height: 500}} >
        <AgGridReact 
            ref={gridRef}
            rowData={rowData} columnDefs={columnDefs}
            animateRows={true} rowSelection='multiple'
            onCellClicked={cellClickedListener}
            defaultColDef={defaultColDef}/>
      </div>

    </Dialog>
    </div>
  );
}

export default Gestionclient;