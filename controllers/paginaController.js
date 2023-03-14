import {Viaje} from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async(req,res)=>{

    // CONSULTAR 3 VIAJES DEL MODELO VIAJE

    const promiseDB = [   ]

    promiseDB.push( Viaje.findAll( {limit: 3 }))
    promiseDB.push( Testimonial.findAll())


    try {
        
        const resultado = await Promise.all( promiseDB ) // Para que ambas consultas comiencen al mismo tiempo

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req,res)=>{

    res.render('nosotros',{
        pagina: 'Nosotros',
    })
}

const paginaViajes = async(req,res)=>{

    //CONSULTAR BD
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Próximos   Viajes',
        viajes, 
    })
}

const paginaTestimoniales = async(req,res)=>{

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
            
        })
    } catch (error) {
        console.log(error)
    }
}

// MUESTRA UN VIAJE POR SU SLUG 
const paginaDetalleViaje = async(req,res)=>{
   
    const { slug } = req.params 

    console.log(slug)

    try {
        const viaje = await Viaje.findOne({where: { slug }})

        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}





export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}