import React , {useState,useEffect, useRef} from 'react';
/*import './Utilisateur.css';

 function Ajout_util(props) {

    const modalElement = useRef(null);
    function close() {
        props.modalElement.current.style.display = 'none';
    }

    function open() {
        props.modalElement.current.style.display = 'block';
    }

    useEffect(() => {
        props.buttonOpen.current.onclick = open;
    });

return (
    <div>
        <h1>Adding a new Person</h1>
        <form id='personForm'  onSubmit={e => props.addPerson(e)}>
            <p>name<br/><input placeholder="Enter name" name="name" required="required"     /></p>
            
            <p>password
                <br/><input type="password" name="password" required="required"  /></p>
            <div id="buttons">
                <button type="submit">OK</button>
                <button type="button" onClick={close}>Cancel</button>
            </div>
        </form>
    </div>
);
}*/
import './Ajout_util.css';
import Axios from 'axios' ;
import List_util from './List_util';
import Utilisateur from './Utilisateur';

//import {useDispatch}from 'react-redux';
//import { login } from '../features/User';

//import{store}from './store' ;
//import{Provider} from 'react-redux' ;

//import {useSelector}from 'react-redux' ;



function Ajout_util({closeModal},list_util){
    //const dispatch=useDispatch(); 
const[ nom ,setname]   =useState('') ;
const[ mdp ,setmdp]    =useState('') ;
const[ desc ,setdesc]  =useState('') ;

const envoyerdb=()=>{
    Axios.post("http://localhost:3001/ajouter",{nom:nom ,mdp:mdp,desc:desc}).then((response)=>{
        console.log(response); 

    });
 }

function validateForm() {
    return false;
  }

    return(
        <div >
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                  <div className='modal-title'>
                    <button className="close-modal" onClick={()=>closeModal(false)}>X</button>
                    <h1>Mise à jour des paramètres</h1>
                  </div>
                  <div className='modal-body'>
                    <form className='paramgeneral-form' >
                        <label for="Timbrefiscale"> login:</label>
                        <input id="Timbrefiscale" type="text" onChange={(e)=>{ 
       setname(e.target.value)}}></input>
                        <label for="Tva">password:</label>
                        <input id="Tva" type="password"  onChange={(e)=>{ 
       setmdp(e.target.value)}}></input>

                        <label for="description"> description:</label>
                        <input id="description" type="text" onChange={(e)=>{ 
       setdesc(e.target.value)}}></input>
                        <button onClick={envoyerdb} disabled={!validateForm()} >Valider</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>

        </div>

    );
};
export default Ajout_util;