const express=require('express')
require('dotenv').config({path:"./config.env"})
const PORT=process.env.PORT || 5000
const path=require('path')
const cookieparser=require("cookie-parser")
const app=express()
require("./db/conn")

app.use(express.json())
app.use(cookieparser())
 
app.use(require('./router/routes'))
app.use(express.static(path.join(__dirname,"../client/build")));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,"../client/build", "index.html"));
  });

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}

app.listen(PORT,()=>{
    console.log("listening at "+PORT)
}) 
