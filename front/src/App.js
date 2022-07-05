import React from 'react';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import {CSSTransition} from 'react-transition-group';
/*import { VscArrowRight } from "@react-icons/all-files/fa";*/
import { VscArrowLeft } from 'react-icons/fa';


function App() {
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
    <a href='#' className='menu-item' onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
      {props.children}
    </a>
    );
  }

  return(
    
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="parametres"
      onEnter={calcHeight}>
        <div className='menu'>
          <DropDownItem>
             Paramètres globales
          </DropDownItem>
          <DropDownItem>
            Honoraire en extra
          </DropDownItem>
          <DropDownItem goToMenu="debours" /*icon={VscArrowRight}*/>
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


export default App;
