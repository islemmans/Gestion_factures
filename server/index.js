const express=require('express') ;
const app=express() ;
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');
const bcrypt=require('bcrypt');
const { response } = require('express');
const saultRounds=10 ;
const cookieparser=require('cookie-parser');
const session=require('express-session');


const db=mysql.createPool({

host: 'localhost'  ,
user:  'root' ,  
password: ''  ,
database: 'client'
});
app.use(cors({
  origin:["http://localhost:3000"],
  methods:["GET","POST"],
  credentials:true 
}));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieparser());
app.use(session({
  key:"userId" ,
  secret:"subscribe",
  resave:false ,
  saveUninitialized:false,
  cookie:{expires:60 * 60 * 24 ,},

}));


app.get('/',(req,res)=>{
  res.send("hello dans notre pade d'acceuil");  
});

app.post('/signin',(req,res)=>{  
    
  const login=req.body.login;
  const mdp1=req.body.mdp1 ;
  
  const cryptedmdp=bcrypt.hash(mdp1,saultRounds,(err,hash)=>{
  if(err)
    console.log("err");   
  });
    
console.log(mdp1);
  db.query("Select * from utilisateur WHERE `login`=? ", [login],function (err, res) {
    if(err) 
      console.log("error insertion : ", err);
   console.log(res[0].password);
   if(res[0].password==mdp1) 
   console.log("welcome");
   else
   console.log("verifier votre password");
  }) ;

  });

/*  const sqlselect=" SELECT * FROM `avocat` WHERE `username`=? AND `mot_de_passe`=? " ;

  db.query(sqlselect),[user,mdp1],(err,result)=>{
    if(err)
       console.log("err2");
    bcrypt.compare(mdp1,result[0].mot_de_passe,(error,response)=>{
      if(response){
      req.session.user=result ;
      res.send(req.session.user);
      }
      else 
      console.log("error db");
    });
   } ; */

//sign i


/*db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
  
  db.query("Select * from utilisateur ", function (err, res) {
    if(err) 
      console.log("error insertion : ", err);
   console.log("selection faite!");
   console.log(res); 
  }) ;
  });*/



app.post('/afficher',(req,res)=>{
  const id1=req.body.id ;
  const mdp=req.body.mdp1;
  
  db.query("Select * from utilisateur ", function (err, res) {
    if(err) 
      console.log("error insertion : ", err);
   console.log("selection faite!");
   console.log(res[0].login);     
  }) ;
});

app.get('/aff',(req,res)=>{
  const sqlselect=" SELECT * FROM `utilisateur`" ;
  db.query(sqlselect),(err,result)=>{
    if(err)
       console.log(err);
    
  }
  
});
app.post('/ajouter',(req,res)=>{
  const desc=req.body.desc ;
  const nom=req.body.nom ;
   const password=req.body.mdp ;
  
   const sqlInsert="INSERT INTO `utilisateur`(`login`, `password`, `domaine`) VALUES (?,?,?)"
   db.query(sqlInsert,[nom,password,desc]),(err,result)=>{
    console.log(result);
    
   } ;
});

  

app.post('/supprimer',(req,res)=>{
  const id=req.body.id ;
  
  const sqlDelete="DELETE FROM `utilisateur` WHERE `id_utilisateur`=?"
  
  db.query(sqlDelete ,id),(err,result)=>{
    console.log(result); 
   }  ;
 
});
       
app.get('/modifier',(req,res)=>{
  const N_nom=req.body.N_nom ;
  const nom=req.body.nom ;
  const desc=req.body.desc;
  const password=req.body.mdp ;
  const sqlInsert="UPDATE `utilisateur` SET `login`=?,`password`=? ,`domaine`=? WHERE `username`=?"
  
  db.query(sqlInsert,[nom,password,desc,N_nom],(err,result)=>{
    console.log(err);
    
   }) ;

});

const PORT=process.env.PORT ||3001
app.listen(PORT,()=>{
   
    console.log("it is running !");
});