require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/linkdin',(req,res)=>{
    res.send('ankitLinkdin')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login in Ankit</h1>')
})

app.get('/youtub',(req,res)=>{
    res.send('<h2>Chai or code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
