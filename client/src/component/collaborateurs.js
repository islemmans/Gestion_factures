import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Modif_util from '../Elements/Modif_util' ;
import{BrowserRouter as Router,Switch, Route,Routes,Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const hangledialog=()=>{
   <Modif_util/>
   
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>

        <Tab label="Parametre generale" onFocus={hangledialog} />
      <a href='http://localhost:3000/signin'> <Tab label="Debours" /></a>
      <Link to='/home' ><Tab label="Utilisateur" /></Link> 
     <Routes><Route path='/home' exact element={<Home/>} ></Route></Routes> 

        <Tab label="Huissier"  TouchRipple />
        <Tab label="Collaborateues" />
        <Tab label="Prime" />
        <Tab label="Greffier" />
      </Tabs>
    </Box>
  );
}
