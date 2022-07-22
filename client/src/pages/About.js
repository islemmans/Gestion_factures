/*import React from 'react';
import './About.css';
import { useState, useEffect, useRef } from 'react';
import {CSSTransition} from 'react-transition-group';
//import { VscArrowRight } from "@react-icons/all-files/fa";
//import { VscArrowLeft } from 'react-icons/fa';
//import './Modal';
//import Modal from './Modal';
import Paramgeneral from '../Elements/Paramgeneral';


function About() {
  return (
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
    <a className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
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
            <a onClick={()=>{setOpenModal(true)}}>
              Paramètres globales
            </a>
            {openModal && <Paramgeneral closeModal={setOpenModal}/>}
          </DropDownItem>
          <DropDownItem>
            Honoraire en extra
          </DropDownItem>
          <DropDownItem goToMenu="debours" >
            Debours
          </DropDownItem>
          <DropDownItem>
            Emplacement dossier
          </DropDownItem>
          <DropDownItem>
            Tribunaux et administration
          </DropDownItem>
          <DropDownItem>
            Type dossier
          </DropDownItem>
          <DropDownItem>
            Utilisateur
          </DropDownItem>
          <DropDownItem>
            Huissier
          </DropDownItem>
          <DropDownItem>
            Collaborateurs
          </DropDownItem>
          <DropDownItem>
            Greffier
          </DropDownItem>
          <DropDownItem>
            Prime Greffier
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
}
*/

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {CSSTransition} from 'react-transition-group';
//import { VscArrowRight } from "@react-icons/all-files/fa";
//import { VscArrowLeft } from 'react-icons/fa';

import Paramgeneral from '../Elements/Paramgeneral';
import Utilisateur from '../Elements/Utilisateur' 
import Modif_util  from '../Elements/Modif_util'
import Debours from '../component/debours' ;
import Collaborateurs from '../component/collaborateurs' ;
import Huissier from '../component/huissier';
import Prime_greff from '../component/prime_greff';
import Greffier from '../component/greffier';
import Signin from './Signin';

function About() {


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
                                            <Huissier/>
          </DropDownItem>
          <DropDownItem>
                                                 <Prime_greff/>                  
          </DropDownItem>
          <DropDownItem goToMenu="debours">
                                              < Debours/>
          </DropDownItem>
          <DropDownItem>
                                               <Huissier/>
          </DropDownItem>
          <DropDownItem>
                                               <Prime_greff/>
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



export default About;