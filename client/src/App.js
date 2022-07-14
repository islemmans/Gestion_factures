import React from 'react';
import Home from './projet/Home';
import Login from './projet/Login';
import{Routes,Route, Link} from 'react-router-dom';
import Menu from './projet/Menu';
function App() {
 
   return(
<div>
   
        <Routes>
        <Route path='/menu' exact element={<Menu/>} ></Route>
        <Route path='/home' exact element={<Home/>} ></Route>
        <Route path='/home:id' exact element={<Home/>} ></Route>
      <Route path='/' exact element={<Login/>} ></Route>
      
       
        </Routes>
   
</div>
  
  );
}

export default App;
