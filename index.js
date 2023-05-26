const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;
let flgCmdStatus = false;
let value;
app.get(`/app/setValue`,cors(),(req,res)=>{
    let cmdStatus = "";
    if(flgCmdStatus == false)
    {
        value = req.query.value;
        cmdStatus ="success"; 
        flgCmdStatus = true;
    }
    else
    {   
        cmdStatus ="wait"; 
    }
    
    const data = {
        status:cmdStatus,
        value:value,
    }
    res.send(cmdStatus);
});
app.get(`/game/getValue`,cors(),(req,res)=>{
    let cmdStatus = "";
    
    if(flgCmdStatus == false)
    {
        cmdStatus = "NOT"
    }
    else
    {
        cmdStatus = value;
        flgCmdStatus = false;

    }
    res.send(cmdStatus);
});
app.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`);
});