
const express = require('express');
const  cors = require("cors")

const app=express();
app.use(express.json())
app.use(cors());
app.get("/",(req, res) => {
    res.send("hello i am in PDAC")
})

app.get("/getpatiant",(req, res) =>{
    res.send("aadil");
})
app.get("/dr",(req, res) =>{
    res.send("Dr.haseeb khan");
})
app.post('/specialist',(req, res) => {
    // res.send(req.body.type)
    let drName="None"
    if(req.body.type==="ENT"){
drName= "Dr . Tahir";
}
   else if(req.body.type==="ENT"){
    drName= "Dr . Ramanarao";

    }
    else if(req.body.type==="PHY"){
        drName= "Dr . MERAJ";
    
        }   else if(req.body.type==="PSY"){
            drName= "Dr . mazz";
        
            }
})

app.listen(5050,()=>{
    console.log("server is working on port:5050");
})