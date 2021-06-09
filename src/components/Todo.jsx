import React from 'react'
import '../utils/css/Todo.estilos.css'
import legoshi from '../utils/images/legoshi.png'
const Todo = () => {
    return (
        <div className="Container_Cabecera">
       <div className="ContainerText">
           <h1>Hola soy Legoshi y estoy en la cabecera</h1>
           <p>Legoshi es un lobo gris joven con una complexión física esbelta pero 
               tonificada y una gran estatura que sobrepasa a la del lobo gris promedio.
                Tiene una lineá de color crema que va desde su rostro hasta su ingle, tiene ojos pequeños y delgados con amplios parpados y diminutas iris de color negro, además de un su hocico bastante largo y fuerte con 
               colmillos afilados, rasgos que le dan una apariencia bastante intimidante e imponente.
            </p>
        </div>
        <div className="ContainerImage"><img src={legoshi}/></div>

        
        </div>
    )   
}
export default Todo
