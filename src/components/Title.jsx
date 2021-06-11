import React from 'react'
import '../utils/css/Title.estilos.css'
import {Link} from "react-router-dom"

function Title(){
    return(
        <div className="Container_Title">
            <h1 id="principalTitle">BEASTARS</h1>
            <Link to="/contact">
                <button>LEGOSHI</button>
            </Link>
            <Link to="/">
                <button>HARU</button>
            </Link>
            <Link to="/rouis">
                <button>ROUIS</button>
            </Link>
        </div>
    )
}
export default Title