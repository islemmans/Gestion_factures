const express= require('express')
const app= express()
const mysql= require('mysql')
const cors= require('cors')
const bodyParser= require('body-parser');

const db=mysql.createPool(
    {
        host: 'localhost',
        user:'root',
        password:'',
        database:'factures_db',
    }
);

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Bienvenue");
});

app.listen(3001,()=>{
    console.log("running on port 3001")
})