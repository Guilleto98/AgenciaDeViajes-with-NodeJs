/* const express = require('express'); */
import express from  'express';
import router from './Routes/index.js';

const app = express();


// DEFINIR PUERTO
const port = process.env.PORT || 4000;

// AGREGAR ROUTER
app.use('/', router);

// HABILITAR PUG
app.set('view engine', 'pug');


app.listen( port, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})