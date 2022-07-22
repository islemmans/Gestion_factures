import '../App.css';
import Axios from 'axios'
import{BrowserRouter as Router,Switch, Route,Routes,Link} from "react-router-dom";
import React,{useState , useEffect} from "react";
import Login from './Login';
import{useParams} from 'react-router-dom';
function Home() {
    const {id}=useParams();
  const [ nom ,setnom ] =useState('');
 // const [ error ,setIsError ] =useState('')
  const [ prenom ,setprenom ] =useState('')
  const [ domaine ,setdomaine ] =useState('')
  const [ email ,setemail ] =useState('')
  const [ password,setpassword] =useState('')
  const [ password1 ,setpassword1 ] =useState('')
  const submitf = () =>{
Axios.post('http://localhost:3001/register',{
  nom:nom,
  prenom:prenom,
  domaine: domaine,
  email:email,
  password:password,
  password1:password1,
}).then((response)=>{
   console.log(response);
  });
};
const checkvalidation=(e)=>{
  if(password !==password1){
   alert("mot de passe ne pas conforme")
  }
  else{
    if((!nom)){
   alert("le champ nom est obligatoire  ");}
    else {
      if(!prenom){
        alert("le champ prenom est obligatoire  ");
      }
      else{
        if(!domaine){
          alert("le champ domaine est obligatoire  ");
        }
        else{
          if(!email){
            alert("le champ email est obligatoire");
          }
          else{
            if(!password){
              alert("le champ   mot de passe est obligtoire");
            }
            else{
              if(!password1){
                alert("le champ verifier  mot de passe est obligtoire");
              } else{
                submitf()
                alert("inscription faite");
              }
              
            }
          }
        }
      }
    }
    }
  }
  return (
    <div className="App">
    <div className='form'>
      <h1>Bienvenue </h1>
      <h3 id="saisir">Veuillez saisir vos coordonnées </h3>
      <input type ="text" name="nom" required ="required"  placeholder=" Nom" onChange={(e) =>{
      setnom( e.target.value);
      }}/>
      <input type ="text" name="prenom" required ="required" placeholder=" Prenom"onChange={(e) =>{
      setprenom( e.target.value);}}/>
      <input type ="text" name="domaine" placeholder=" domaine"onChange={(e) =>{
        setdomaine( e.target.value);
    }}/>
    <input type ="email" name=" email" required ="required" placeholder=" Email"onChange={(e) =>{
      setemail( e.target.value);}}/>
      <input type ="password" name="password" required ="required" placeholder=" Mot de passe"onChange={(e) =>{
        setpassword(e.target.value)
      }}
      />
      <input type ="password" name="password1" value={password1} placeholder=" Verifier Mot de passe" onChange={(e) =>{setpassword1(e.target.value)}}
     />
      <button onClick={(submitf)&&(checkvalidation)}>s'inscrire</button>
       
      <h3>Tu a un compte ? <Link to='/' >se connecter</Link> 
     <Routes><Route path='/login' exact element={<Login/>} ></Route></Routes> </h3>
      

    </div>
    </div>
    
  );
}

export default Home;
