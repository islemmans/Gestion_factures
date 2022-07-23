import React from "react";
import Axios from 'axios';
import {useState , useEffect} from "react";
import{BrowserRouter as Router,Switch, Route,Routes,Link,useNavigate} from "react-router-dom";
import Home from './Home';
import Menu from "./Menu";
import{useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
function Login(){
  const tasks=useSelector((state=>state.user));
    const {id}=useParams();
    const [ login ,setlogin ] =useState('')
    const [ password,setpassword] =useState('')



    /*const submitf = () =>{
      Axios.post('http://localhost:3001/login',{
          email:email,
          password:password,
        
        }).then(
            navigation()
      )
          
         .catch(error=>{
      console.log(error)
         })
        };*/

        const navigate=useNavigate();
function validateForm() 
  {
    if( password.length > 0 && login.length > 0)
    { return true;}

      else {
      return false ;}
    };

    const util=tasks.find(t => t.login===login);

  function validpassword(){
   if(validateForm())
    {
      if(util.password===password)
    return true;
    else
    {
    return false ;}
      }  };

   const verif=()=>{

        if(validpassword())
        {//setIsSubmitted=true ; 
          navigate('/menu')   ;
          alert('bienvenue');
          Axios.post("http://localhost:3001/login",{login:login,password:password}).then((response)=>{
            console.log(response);    });   
            
        }
        else
        {//setIsSubmitted=false ;
          alert('Mot de passe incorrect!');}
        }
     
      
      
    return(
        
        <div className="App">
        <div className='form'>
          <h1>Bienvenue </h1> 
        <input type ="email" name="login" required ="required" placeholder=" Email"onChange={(e) =>{
          setlogin( e.target.value);}}/>
          <input type ="password" name="password" required="required" placeholder=" Mot de passe"onChange={(e) =>{
            setpassword(e.target.value)
          }}
          />
          <div id ="connecter">
        
          <button onClick={(verif) }  disabled={!validateForm()} > se connecter
         
          </button>
          </div>
          <h3>Vous n'avez pas un compte ? <Link to='/home' >s'inscrire</Link> 
     <Routes><Route path='/home' exact element={<Home/>} ></Route></Routes> </h3>
      
          </div>
          </div>
       );    
}
export default Login;
