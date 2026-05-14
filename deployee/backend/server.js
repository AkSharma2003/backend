import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send("server is ready");
})

app.get('/api/joks',(req,res)=>{
    const joks=[
        {
            'id':1,
            'tital': 'A jock',
            'contant':'this is jocks'
        },
        {
            'id':2,
            'tital': '2nd jock',
            'contant':'this is another jocks'
        },
        {
            'id':3,
            'tital': 'third jock',
            'contant':'this is jocks'
        }
    ];
    res.send(joks);
})
const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})