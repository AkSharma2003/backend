require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter',(req,res)=>{
    res.send("hello, welcomw to twiter")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${port}`)
})
 