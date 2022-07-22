
import * as React from 'react';

import TaskForm from "../TaskForm";
import TasksHeader from "../TaskHeader";
import TasksList from "../TaskList";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './Signin.css' ;



import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'login',
    headerName: 'Login',
    width: 150,
    editable: true,
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 150,
    editable: true,
  },
  {
    field: 'domaine',
    headerName: 'Domaine',
    width: 150,
    editable: true,
  },
];

/*const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon',email:'@gaml.com', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',email:'@gaml.com', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' ,email:'@gaml.com', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya' ,email:'@gaml.com', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' ,email:'@gaml.com', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null ,email:'@gaml.com', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara' ,email:'@gaml.com', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini' ,email:'@gaml.com', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey' ,email:'@gaml.com', age: 65 },
];*/

export default function Signin() {
  const tasks=useSelector((state=>state.user));
  return (
    <Box sx={{ height: 350, width: 350 }}>
       <Provider store={store}>
      <DataGrid
        rows={tasks}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      </Provider>
    </Box>
  );
}



/*export default function Signin(){
  return(
    <div className="container">
 <Provider store={store}>
  
         <TasksHeader/>
         <TasksList/>
         <footer>
           <TaskForm/>
        
         </footer>

       </Provider>
     </div>
        );} */                         


