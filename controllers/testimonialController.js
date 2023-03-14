import { Testimonial } from '../models/Testimoniales.js'


const guardarTestimonial = async(req,res) => {
    
     // VALIDAR
    
     const { nombre, correo, mensaje} = req.body
     const errores = [];
 
     if(nombre.trim() === ''){
         errores.push({mensaje: 'El nombre esta vacio'})
     }
 
     if(correo.trim() === ''){
         errores.push({mensaje: 'El correo esta vacio'})
     }
 
     if(mensaje.trim() === ''){
         errores.push({mensaje: 'El mensaje esta vacio'})
     }
     
     
     if(errores.length > 0){

        // Consultar Testimoniales existentes
         const testimoniales = Testimonial.findAll();
 
         // Mostrar la vista con errores
         res.render('testimoniales', {
             pagina: 'Testimoniales',
             errores,
             nombre,
             correo,
             mensaje,
             testimoniales
         });
     } else {
        try {
           await Testimonial.create({
              nombre,
              correo,
              mensaje 
           })
           console.log('Testimonial guardado:', Testimonial);
           res.redirect('/testimoniales')
        } catch (error) {
        console.error('Error al guardar el testimonial:', error);
           res.redirect('/testimoniales')
        }
     }
     
}
export {
    guardarTestimonial
}