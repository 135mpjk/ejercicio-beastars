import React from 'react'
import '../utils/css/Footer.estilos.css'
import rouis from '../utils/images/rouis.png'
const Footer = () => {
    return (
        <div className="Container_Footer">
        <div className="ContainerText">
            <h1>Hola soy Rouis y estoy en el footer</h1>
            <p>Rouis es un ciervo rojo joven de complexión esbelta y de altura promedio, su pelaje
                 es de una tonalidad pardo amarillento y su rostro tiene diversos rasgos atractivos
                  como sus ojos largos y ligeramente femeninos con grandes iris de color café, así 
                  también como pestañas largas y delicadas, sus astas son de color marrón claro y se 
                  compone de formaciones curvas. Rouis solía tener un tatuaje con el número
                la parte inferior de su pie derecho, siendo este su ID como ganado en el Mercado Negro
             </p>
         </div>
         <div className="ContainerImage"><img src={rouis}/></div>
 
         
         </div>
    )   
}
export default Footer