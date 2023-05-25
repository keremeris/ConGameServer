const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
let flgCmdStatus = false;
let i =0;
let value;
app.get(`/app/setValue/:id`,(req,res)=>{
    let cmdStatus = "";
    if(flgCmdStatus == false)
    {
        const{ id } = req.params;
        i = id;
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
        user:i,
        value:value,
    }
    res.json(data);
});
app.get(`/game/getValue/`,(req,res)=>{
    let cmdStatus = "";
    
    if(flgCmdStatus == false)
    {
        cmdStatus = "NOT"
    }
    else
    {
        cmdStatus = "CMD"
        flgCmdStatus = false;

    }
    const data = {
        id:i,
        value:value,
        status:cmdStatus,
    }
    res.json(data);
});
app.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`);
});