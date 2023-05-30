const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;
let flgCmdStatus_ColorGame = false;
let value_ColorGame;
let flgCmdStatus_ChooseGravity = false;
let value_ChooseGravity;
let flgCmdStatus_Stickyman = false;
let value_Stickyman;
app.get(`/ColorGame/setValue`,cors(),(req,res)=>{
    let cmdStatus = "";
    //console.log("received SetValue from React");
    if(flgCmdStatus_ColorGame == false)
    {
        value_ColorGame = req.query.value;
        cmdStatus ="success"; 
        flgCmdStatus_ColorGame = true;
    }
    else
    {   
        cmdStatus ="wait"; 
    }
    
   
    res.send(cmdStatus);
});
app.get(`/ChooseGravity/setValue`,cors(),(req,res)=>{
    let cmdStatus = "";
    console.log("received SetValue from React");
    if(flgCmdStatus_ChooseGravity == false)
    {
        value_ChooseGravity = req.query.value;
        cmdStatus ="success"; 
        flgCmdStatus_ChooseGravity = true;
    }
    else
    {   
        cmdStatus ="wait"; 
    }
    
   
    res.send(cmdStatus);
});
app.get(`/Stickyman/setValue`,cors(),(req,res)=>{
    let cmdStatus = "";
    //console.log("received SetValue from React");
    if(flgCmdStatus_Stickyman == false)
    {
        value_Stickyman = req.query.value;
        cmdStatus ="success"; 
        flgCmdStatus_Stickyman = true;
    }
    else
    {   
        cmdStatus ="wait"; 
    }
    
   
    res.send(cmdStatus);
});
app.get(`/ColorGame/getValue`,cors(),(req,res)=>{
    let cmdStatus = "";
    //console.log("received GetValue from Game");
    if(flgCmdStatus_ColorGame == false)
    {
        cmdStatus = "NOT"
    }
    else
    {
        cmdStatus = value_ColorGame;
        flgCmdStatus_ColorGame = false;

    }

    res.send(cmdStatus);
});
app.get(`/ChooseGravity/getValue`,cors(),(req,res)=>{
    let cmdStatus = "";
    //console.log("received GetValue from Game");
    if(flgCmdStatus_ChooseGravity == false)
    {
        cmdStatus = "NOT"
    }
    else
    {
        cmdStatus = value_ChooseGravity;
        flgCmdStatus_ChooseGravity = false;

    }

    res.send(cmdStatus);
});
app.get(`/Stickyman/getValue`,cors(),(req,res)=>{
    let cmdStatus = "";
    //console.log("received GetValue from Game");
    if(flgCmdStatus_Stickyman == false)
    {
        cmdStatus = "NOT"
    }
    else
    {
        cmdStatus = value_Stickyman;
        flgCmdStatus_Stickyman = false;

    }

    res.send(cmdStatus);
});
app.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`);
});