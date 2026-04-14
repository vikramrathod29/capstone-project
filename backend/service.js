const express=require("express")

const app=express();

app.get('/payment',(req,res)=>
{
  console.log("Data fetch")
})
app.post('/payment insert',(req,res)=>
{
    console.log("Data insert")
})
app.put('/payment edit',(req,res)=>
{
    console.log("Data edit")
})
app.delete('/payment delete',(req,res)=>
{
    console.log("Data delete")
})