
import * as React from 'react';

import TaskForm from "../TaskForm";
import TasksHeader from "../TaskHeader";
import TasksList from "../TaskList";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './Signin.css' ;




import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon',email:'@gaml.com', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',email:'@gaml.com', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' ,email:'@gaml.com', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya' ,email:'@gaml.com', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' ,email:'@gaml.com', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null ,email:'@gaml.com', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara' ,email:'@gaml.com', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini' ,email:'@gaml.com', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey' ,email:'@gaml.com', age: 65 },
];

/*export default function Signin() {
  return (
    <Box sx={{ height: 500, width: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}*/



export default function Signin(){
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
        );}                          


