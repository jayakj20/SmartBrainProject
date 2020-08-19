import React from "react";
import Tilt from 'react-tilt'
import brain from "./brain.jpg";
import "./Logo.css";

function Logo() {

    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> <img style = {{backgroundBlendMode: "multiply"}} src={brain} alt="brainlogo"/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;