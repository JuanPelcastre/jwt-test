const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res)=>{
    res.json({
        tex: 'API works'
    });
});
app.get('/api/login', (req, res)=>{
    const user = { id:3 };
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token
    });
});
app.get('/api/protected', (req, res)=>{
    res.json({
        tex: 'Route protected'
    });
});

app.listen(3000, ()=>{
    console.log('On port 3000')
});