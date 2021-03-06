import { useState } from "react"
import Comments from "./Comments"



function PlanetPage({planet, API, setPlanets, planets}){
    
    return(
        <div className="planetMain" >
        <div className="PlanetPage">
            <div></div>
            <div>
                <img id={planet.name} src={planet.image}/>
                <h1>{planet.name.toUpperCase()}</h1>
            </div>
            <div>
                <h2>{planet.header}</h2>
                <h4>{planet.population}</h4>
            </div>
            <div></div>
            <div></div>
        </div>
        <div className="PlanetPageA" >
            <div><h3>{planet.description}</h3></div>
            <img src={planet.detailedImage} />
        </div>
        <div className="comments">
            <Comments planets={planets} setPlanets={setPlanets} planet={planet} API={API} />
        </div>
        </div>
    )
}

export default PlanetPage