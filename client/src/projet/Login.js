import React from "react";
import Axios from 'axios';
import {useState , useEffect} from "react";
import{BrowserRouter as Router,Switch, Route,Routes,Link} from "react-router-dom";
import Home from './Home';
import Menu from "./Menu";
import{useParams} from 'react-router-dom';
function Login(){
    const {id}=useParams();
    const [ email ,setemail ] =useState('')
    const [ password,setpassword] =useState('')
    const submitf = () =>{
        Axios.post('http://localhost:3001/login',{
          email:email,
          password:password, 
        }).then(()=>{
           alert("successful insert")
          });
        };
        const validationchamp=(e)=>{
          if(!email){
           alert("le champ email est obligatoire")
           
          }
          else {
           if((!password)){
           alert("le champ mot depasse est obligatoire");}
           else{
             submitf();
             alert("Bienvenu");
             
           }
          }
         
        }   
    return(
        
        <div className="App">
        <div className='form'>
          <h1>Bienvenue </h1> 
        <input type ="email" name=" email"  required ="required"placeholder=" Email"onChange={(e) =>{
          setemail( e.target.value);}}/>
          <input type ="password" name="password" required="required" placeholder=" Mot de passe"onChange={(e) =>{
            setpassword(e.target.value)
          }}
          />
         
          <button onClick={(submitf)&&(validationchamp) } ><Link to='/menu' >se connecter</Link> <Routes><Route path='/menu' exact element={<Menu/>} ></Route></Routes> </button>
          <h3>Vous n'avez pas un compte ? <Link to='/home' >s'inscrire</Link> 
     <Routes><Route path='/home' exact element={<Home/>} ></Route></Routes> </h3>
      
          </div>
          </div>
       );    
}
export default Login;
