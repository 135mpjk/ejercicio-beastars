import React from 'react'
import '../utils/css/Cuerpo.estilos.css'
import haru from '../utils/images/haru.png'
const Cuerpo = () => {
    return (
        <div className="Container_Cuerpo">
        <div className="ContainerText">
            <h1>Hola soy Haru y estoy en el cuerpo</h1>
            <p>Haru es un conejo enano blanco puro cubierto de un pelaje crema claro con grandes ojos
                 marrones que son toda pupila. Por lo general, se la ha visto en la serie con su 
                 uniforme escolar que consiste en una camisa blanca, con una pequeña pajarita y una falda larga blanca plisada con dos líneas 
                horizontales de color azul claro que está atada por un pequeño cinturón color canela.
             </p>
         </div>
         <div className="ContainerImage"><img src={haru}/></div>
 
         
         </div>
    )   
}
export default Cuerpo