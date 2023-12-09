//Requiero express y path
const express = require("express")
const path = require ("path")
const app = express()

app.use(express.static("public"));
//vincular las URLs con los recursos que acabamos de ubicar.
//direccionar al recurso index.html.
app.get("/", (reg,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})
//direccionar al recurso babbage.html
app.get("/babbage", (reg,res)=>{
    res.sendFile(path.join(__dirname,"/views/babbage.html"))
})
//direccionar al recurso berners-lee.html.
app.get("/berners-lee", (reg,res)=>{
    res.sendFile(path.join(__dirname,"/views/berners-lee.html"))
})
//direccionar al recurso clarke.html.
app.get("/clarke", (reg,res)=>{
    res.sendFile(path.join(__dirname,"/views/clarke.html"))
})
//direccionar al recurso hamilton.html.
app.get("/hamilton", (reg,res)=>{
    res.sendFile(path.join(__dirname,"/views/hamilton.html"))
})
//direccionar al recurso hopper.html.
app.get("/hopper", (reg,res)=>{
    res.sendFile(path.join(__dirname,"/views/hopper.html"))
})
//direccionar al recurso lovelace.html.
app.get("/lovelace", (reg,res)=>{
    res.sendFile(path.join(__dirname,"/views/lovelace.html"))
})
//direccionar al recurso turing.html.
app.get("/turing", (reg,res)=>{
    res.sendFile(path.join(__dirname,"/views/turing.html"))
})

//Levantar un servidor web con Express que responda al puerto 3030
app.listen(3030, ()=> console.log("servidor en curso"))
