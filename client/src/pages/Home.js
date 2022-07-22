
import React , {useState,useEffect} from 'react';
import Axios from 'axios' ;
import './Home.css' ;
import{BrowserRouter as Router,Switch,Route,Routes,Link, useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Signin from "./Signin";
import About from './About';
import{store} from'../redux/store'

function Home(){  
    //const {id}=useParams() ;
    const navigate=useNavigate();
    const[ nom ,setname]    =useState('') ;
    const[ mdp ,setmdp]    =useState('') ;

    const[ login ,setlogin]    =useState('') ;
    const[ mdp1 ,setmdp1]    =useState('') ;

    const tasks=useSelector((state=>state.user));

    const [isSubmitted, setIsSubmitted] = useState(false);
   /* const submitreview=()=>{
      Axios.post("http://localhost:3001/ajouter",{nom:nom ,mdp:mdp}).then((response)=>{
        console.log(response);
       
      });
    } ;*/
 
    function validateForm() 
    {
      if( mdp1.length > 0 && login.length > 0)
      { return true;}

        else {
        return false ;}
      };

      const util=tasks.find(t => t.login===login);

    function validpassword(){
     if(validateForm())
      {
        if(util.password===mdp1)
      return true;
      else
      {
      return false ;}
        }  };

     const verif=()=>{

          if(validpassword())
          {//setIsSubmitted=true ; 
            navigate('/about')   ;
            alert('bienvenu');           
            Axios.post("http://localhost:3001/signin",{login:login,mdp1:mdp1}).then((response)=>{
              console.log(response);    });   
              
          }
          else
          {//setIsSubmitted=false ;
            alert('veuillez remplir les champs');}
      } ;   

/*
useEffect(()=>{
  Axios.get("http://localhost:3001/signin").then((response)=>{
console.log(response);
  }); },[]);
*/
    return (
      <div className="hom">

    <div className='login'>
  <form>
  <label>email </label>
  <input type='text' name='user'onChange={(e)=>{ 
     setlogin(e.target.value)}   }></input>
  <label>password</label>
  <input type='password' name='mdp1'  onChange={(e)=>{ 
     setmdp1(e.target.value)}   }></input>



<div id ="connecter">
        
          <button onClick={(verif) }  disabled={!validateForm()}> se connecter
          
          </button>
          </div>

  vous n'avez pas de compte  <button>register</button> 
  </form>
  </div>
  
      </div>
    );
}

export default Home ;

/*    
    <div className='registrer'>
  <form>
    <label>user_name</label>
    <input type='text' name='nom'onChange={(e)=>{ 
       setname(e.target.value)}   }></input>
    <label>password</label>
    <input type='password' name='mdp' placeholder="mot de passe" onChange={(e)=>{ 
       setmdp(e.target.value)}   }></input>
    
    <button onClick={submitreview}><Link to='/about' >login</Link> 
     <Routes><Route path='/about' exact element={<About/>} ></Route></Routes>   </button>
     </form>
    </div>





 <Link to='/about'  >
          <button onClick={(verif) }  disabled={!validateForm()}> se connecter
          {  validpassword()? <div><Routes><Route path='/about' exact element={<About/>} ></Route></Routes></div>:
          <div></div>
                  }
          </button></Link> 



    disabled={!validateForm()}
    <Link to='/about' >

    /*<Link to='/about' ><button onClick={verif}  disabled={!validateForm()}> login</button></Link>
{validpassword()? <div><Routes><Route path='/about' exact element={<About/>} ></Route> </Routes></div> : console.log('verifier votre mot de passe')}
*/
