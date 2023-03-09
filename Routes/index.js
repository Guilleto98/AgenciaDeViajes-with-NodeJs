import express from 'express';


const router = express.Router();

router.get('/', (req,res)=>{ //Req la peticion, Res la respuesta de express 
    res.send('Inicio') //Para renderizar una vista
});

router.get('/nosotros', (req,res)=>{
    res.render('nosotros')
});

router.get('/contacto', (req,res)=>{
    res.send('contacto')
});


export default router