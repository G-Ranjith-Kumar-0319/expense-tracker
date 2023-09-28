const express = require('express');
const cors = require('cors');

const app = express();


require('dotenv').config();

const port = process.env.PORT


// middlewares
app.use(express.json());;
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello Ranjith')
})

const server = ()=>{
    app.listen(port, ()=>{
        console.log('you are listening to Port', port)
    })
}

server();