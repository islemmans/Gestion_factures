import './Utilisateur.css';
import Axios from 'axios' ;
import React , {useState,useEffect, useRef} from 'react';


function Supp_util({closeModal}){
  
const[ id ,setid]   =useState('') ;


const[ mdp1 ,setmdp]   =useState('') ;

const envoyerdb=()=>{

  /*Axios.post("http://localhost:3001/signin",{id:id,mdp1:mdp1}).then((response)=>{
    console.log(response.data);    });*/

   Axios.post("http://localhost:3001/supprimer",{id:id}).then((response)=>{
        console.log(response);
      });

    }
 

    return(
        <div>
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                  <div className='modal-title'>
                    <button className="close-modal" onClick={()=>closeModal(false)}>X</button>
                    <h1>inserer le user à supprimer</h1>
                  </div>
                  <div className='modal-body'>
                    <form className='paramgeneral-form' >
                        <label for="Timbrefiscale"> id:</label>
                        <input id="Timbrefiscale" type="number" onChange={(e)=>{ 
       setid(e.target.value)}}></input>
                         
                        <button onClick={envoyerdb}>Valider</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>

        </div>

    );
};
export default Supp_util;