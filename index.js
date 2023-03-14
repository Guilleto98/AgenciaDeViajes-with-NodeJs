/* const express = require('express'); */
import express from  'express';
import router from './Routes/index.js';
import db from './config/db.js'

const app = express();


// CONECTAR LA BASE DE DATOS
db.authenticate()
    .then( () => console.log('base de datos conectada') )
    .catch( error => console.log(error))


// DEFINIR PUERTO
const port = process.env.PORT || 4000;


// HABILITAR PUG
app.set('view engine', 'pug');

// OBTENER EL AÑO ACTUAL
app.use( (req, res, next)=>{
    
    const year = new Date();
    res.locals.ActualYear = year.getFullYear()
    res.locals.nombreSitio = 'Agencia de Viajes';
    next()

});

// AGREGAR BODY PARSER PARA LEER LOS DATOS DEL FORM
app.use(express.urlencoded({ extends: true }))

// DEFINIR LA CARPETA PUBLICA
app.use(express.static('public'))

// AGREGAR ROUTER
app.use('/', router);


app.listen( port, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`)
})