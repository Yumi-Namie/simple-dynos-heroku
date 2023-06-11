// importamos express desde packeage.json
const express = require('express');

const app=express();
app.get('/',(req,res)=> {
    res.send('Hola f5!!')
});

app.listen(process.env.PORT || 3000, () =>{
    console.log('Funcionando, todo ok!')
});