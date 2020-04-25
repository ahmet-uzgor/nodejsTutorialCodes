const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to the Ahmet's Page");
});

app.listen(8080,()=>{
    console.log("It has sent");
})