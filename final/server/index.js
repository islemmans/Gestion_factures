const express =require("express");
const app =express();
const router =express.Router();
const cors =require("cors")
const mysql =require("mysql");
const bodyParser=require("body-parser");
const bcrypt =require("bcrypt");
const saultRounds =10
const db =mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"factures",});
    app.use(cors())
    app.use(express.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.post ("/",(req,res)=>{
        const nom =req.body.nom
        const prenom =req.body.prenom
        const domaine=req.body.domaine
        const email=req.body.email
        const password=req.body.password
        const password1=req.body.password1
        const nomdossier=req.body.nomdossier
     const sqlinsert = " INSERT INTO `inscrire` (`nom`, `prenom`,`domaine`,`email`,`password`,`password1`) VALUES ( ?,?,?,?,?,?) ;";
    db.query(sqlinsert,[nom,prenom,domaine,email,password,password1] ,(err,result)=>{
     console.log(result)
    })
   
    const sqlnomdossier ="INSERT INTO `empdossier`( `nomdossier`) VALUES ('?');";
    db.query(sqlnomdossier,[nomdossier] ,(err,result)=>{
        console.log(result)
       })
    });



// ajouter par tasnim :
app.post('/login',(req,res)=>{  
    
         const email=req.body.email
        const password=req.body.password
  
  const cryptedmdp=bcrypt.hash(password,saultRounds,(err,hash)=>{
  if(err)
    console.log("err");   
  });
    
console.log(password);
  db.query("Select * from `inscrire` WHERE `email`=? ", [email],function (err, res) {
   if(err) 
   console.log("error insertion : ", err);
   if(res[0].email==undefined){
    console.log("erreur")
   }
   else{
    console.log(res[0].password);
    if(res[0].password==password) 
    console.log("welcome");
    else
    console.log("verifier votre password");}
   
  }) ;

  });
  const PORT=process.env.PORT ||3001
  app.listen(PORT,()=>{
     
      console.log("it is running !");
  });









   