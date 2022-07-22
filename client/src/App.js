
import React from 'react';
import './App.css';
/*import { useState, useEffect, useRef } from 'react';
import {CSSTransition} from 'react-transition-group';
//import { VscArrowRight } from "@react-icons/all-files/fa";
//import { VscArrowLeft } from 'react-icons/fa';
import './Modal';
import Modal from './Modal';
import Paramgeneral from './Elements/Paramgeneral';
import Utilisateur from './Elements/Utilisateur' ;
import Modif_util  from './Elements/Modif_util';
import Debours from './component/debours' ;
import Collaborateurs from './component/collaborateurs' ;
import Huissier from './component/huissier';
import Prime_greff from './component/prime_greff';
import Greffier from './component/greffier'

function App() {


  return (


//<Collaborateurs/>

   

    <Navbar>
      <NavItems icon='Paramètres'>
        <DropDownParam/>
      </NavItems>
      <NavItems icon='Client'>
        <DropDownMenu/>
      </NavItems>
     
      <NavItems icon='Dossier'></NavItems>
      <NavItems icon='Rappel'></NavItems>
      <NavItems icon='Règlement'></NavItems>
      <NavItems icon='Etat Huissier'>
        <DropDownMenu/>
      </NavItems>
    </Navbar>
 
  );
}

function Navbar(props){
  return(
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {props.children}
      </ul>

    </nav>
  );
}

function NavItems(props){
  const[open, setopen]=useState(false);

  return(
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={()=>setopen(!open)}>
        {props.icon}
      </a>

    {open && props.children}
    </li>
  );
}


function DropDownParam(){

  const [activeMenu, setActiveMenu]= useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  function DropDownItem(props){
    return(
    <a href='#'  className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
      {props.children}
    </a>
    );
  }

  const[openModal,setOpenModal]= useState(false);
    
  return(
    
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
      onEnter={calcHeight}>
        <div className='menu'>
          <DropDownItem>
           parametre generale
          </DropDownItem>
          <DropDownItem>
            Honoraire en extra
          </DropDownItem>
          <DropDownItem goToMenu="debours">
           < Debours/>
          </DropDownItem>
          <DropDownItem>
            Emplacement dossier
          </DropDownItem>
          <DropDownItem>
            Tribunaux et administration
          </DropDownItem>
          <DropDownItem>

                                      <Modif_util />
          </DropDownItem>
          <DropDownItem>
          <a onClick={()=>{setOpenModal(true)}}>
            Utilisateur
            </a>
            {openModal && <Utilisateur closeModal={setOpenModal}/>}
          </DropDownItem>
          <DropDownItem>
                                    <Huissier/>
          </DropDownItem>
          <DropDownItem>
          
                                          <Greffier/>
           
          </DropDownItem>
          <DropDownItem>
                            <Greffier/>
          </DropDownItem>
          <DropDownItem>
                        <Prime_greff/>
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'debours'}
        timeout={500}
        classNames="parametres-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropDownItem goToMenu="main">
            <h3>Debours</h3>
          </DropDownItem>
          <DropDownItem>Timbre</DropDownItem>
          <DropDownItem>Photocopie</DropDownItem>
          <DropDownItem>Transport</DropDownItem>
          <DropDownItem>Recette du finance</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function DropDownMenu(){

  const [activeMenu, setActiveMenu]= useState('client');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props){
    return(
    <a href='#' className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
      {props.children}
    </a>
    );
  }

  return(
    
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition in={activeMenu === 'client'} unmountOnExit timeout={500} classNames="parametres">
        <div className='menu'>
        <DropDownItem>
           Hello
        </DropDownItem>
        </div>
      </CSSTransition>
    </div>
    
   
  );
};
*/

import{BrowserRouter as Router,Switch, Route,Routes,Link} from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Signin from "./pages/Signin";

function App(){
  return(
    <div className="App">
     
    
      <Link to='/home' >home</Link>   
          <Link to='/about' >about</Link>  
           
          <Link to='/signin' >signin</Link> 
        <Routes>
        <Route path='/' exact>  </Route>
        <Route path='/home' exact element={<Home/>} ></Route>
        <Route path='/home/:id' exact element={<Home/>} ></Route>
        <Route path='/signin' exact element={<Signin/>} ></Route>
        <Route path='/about' exact element={<About/>} ></Route>
        
        
        </Routes>
     
     
     
    </div>

  )};


export default App;
