const http = require("http")

// const PORT =7000
 
// http.createServer((req,res)=>{
//     res.write(`Hello And Welcome to node js:${PORT}`)
//     res.end()
// }).listen(PORT)


const express = require("express")

const app =express()

// For Get Method

app.get("/get",(req,res)=>{
res.send("Hello this is get method")
})

// For Post Method

app.post("/post",(req,res)=>{
    res.send("Hello this is post method")
    })
    

// For Put Method

app.put("/put",(req,res)=>{
    res.send("Hello this is put method")
    })
    // For Delete Method

app.delete("/delete",(req,res)=>{
    res.send("Hello this is delete method")
    })
    





app.listen(7000,()=>{
    console.log("Local host is running")
})