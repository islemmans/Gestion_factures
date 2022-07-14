const express =require("express");
const app =express();
const router =express.Router();
const cors =require("cors")
const mysql =require("mysql");
const bodyParser=require("body-parser");
const bcrypt =require("bcrypt");
const saltRounds =10
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
        const datedenaissance=req.body.datedenaissance
        const email=req.body.email
        const password=req.body.password
        const password1=req.body.password1
        const nomdossier=req.body.nomdossier
     const sqlinsert = " INSERT INTO `inscrire` (`nom`, `prenom`,`datedenaissance`,`email`,`password`,`password1`) VALUES ( ?,?,?,?,?,?) ;";
    db.query(sqlinsert,[nom,prenom,datedenaissance,email,password,password1] ,(err,result)=>{
     console.log(result)
    })
    const sqlinse = " INSERT INTO `login` (`email`,`password`) VALUES (?,?) ;";
    db.query(sqlinse,[email,password] ,(err,result)=>{
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
  
  const cryptedmdp=bcrypt.hash(mdp1,saultRounds,(err,hash)=>{
  if(err)
    console.log("err");   
  });
    
console.log(password);
  db.query("Select * from login WHERE `email`=? ", [email],function (err, res) {
    if(err) 
      console.log("error insertion : ", err);
   console.log(res[0].password);
   if(res[0].password==password) 
   console.log("welcome");
   else
   console.log("verifier votre password");
  }) ;

  });










    app.listen(3001,()=>{
        console.log("runing on port 3001");
    })
