import './Utilisateur.css';
import React , {useState,useEffect, useRef} from 'react';
import Axios from 'axios' ;

import{BrowserRouter as Router,Switch, Route,Routes,Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import '../pages/Home';
import Home from '../pages/Home';

import Paramgeneral from './Paramgeneral';
import Ajout_util from './Ajout_util';
import Supp_util from './Supp_util';
import List_util from './List_util';
import Modif_util from './Modif_util';
import Modal from '../Modal';
import TodoList from './List_util';

import{store}from '../redux/store' ;

//import{Provider} from 'react-redux' ;
//import { login } from '../redux/slices/User';
//import {useDispatch}from 'react-redux';
//import {useSelector}from 'react-redux' ;

function Utilisateur({closeModal}){
//const dispatch=useDispatch ;
 // const state=useSelector((state)=>state.User.value) ;


   const list_util=[
    {   
      login:"tasnim" ,
      password:"mami",
      description:"student"
    },
    {  
      login:"tastas" ,
      password:"mammmi",
      description:"student4"
    },
    {    
      login:"tas" ,
      password:"ma",
      description:"student5"
    },
    {     
      login:"tasso" ,
      password:"mam",
      description:"student6"
    }
   ] ;
  

    const[openModal,setOpenModal_a]= useState(false);
    const[openModal2,setOpenModal_s]= useState(false);
    const[openModal3,setOpenModal_m]= useState(false);
    


    const[ nomm ,setnamem]   =useState('') ;
    const[ mdpm ,setmdpm]    =useState('') ;
    const[ N_nomm ,setN_nom] =useState('') ;

    const[ noms ,setnames]   =useState('') ;
    const[ mdps ,setmdps]    =useState('') ;

    const[ noma ,setnamea]   =useState('') ;
    const[ mdpa ,setmdpa]    =useState('') ;
 /*   const afficher=()=>{
        Axios.get("http://localhost:3001/afficher",{nom:noma}).then((response)=>{
          console.log(response);
        });
    };
    const ajouter=()=>{
        Axios.post("http://localhost:3001/ajouter",{nom:noma ,mdp:mdpa}).then((response)=>{
          console.log(response);
        });
      } ;
      const supprimer=()=>{
        Axios.post("http://localhost:3001/supprimer",{nom:noms ,mdp:mdps}).then((response)=>{
          console.log(response);
        });
      } ;
      const modifier=()=>{
        Axios.post("http://localhost:3001/modifier",{nom:nomm ,mdp:mdpm,N_nomm:N_nomm}).then((response)=>{
          console.log(response);
        });
      } ; 
*/
    return(
        <div>         
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                  <div className='modal-title'>
                    <button className="close-modal" onClick={()=> closeModal(false)}>X</button>
                    <h1>Listes des utilisateurs</h1>
                  </div>
                  <div className='modal-body'>
          
                    <form className='utilisateur-form'>
                 
                    
                        <button onClick={()=>{setOpenModal_a(true)}}>ajouter</button> 
                    {openModal && <Ajout_util closeModal={setOpenModal_a}/> }



     <button  onClick={()=>{setOpenModal_s(true)}}>supprimer</button>
     {openModal2 && <Supp_util closeModal={setOpenModal_s}/>}

     <button  onClick={()=>{setOpenModal_m(true)}}>modifier</button>
     {openModal3 && <Modif_util closeModal={setOpenModal_m}/>}
              
                        
                    </form>
                  </div>
                </div>
            </div>
        </div>
        
        </div>

    );
};
export default Utilisateur;


 /* <button onclick={()=>
                      dispatch(
                        login({
                          user:"hichem@test.tn",
                          password:"smairia",
                          description:"hichem",
                          }))}
                    >click hree</button>*/
                    //   <List_util todos={list_util}/>  