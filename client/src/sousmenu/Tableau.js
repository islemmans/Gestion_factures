import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from "../redux/store";
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

export default function Tableau() {
  const tasks=useSelector((state=>state.user));
  return (
    <Box sx={{ height: 300, width: 600 }}>
       <Provider store={store}>
      <DataGrid
        rows={tasks}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        //checkboxSelection
        disableSelectionOnClick
      />
      </Provider>
    </Box>
  );
}
