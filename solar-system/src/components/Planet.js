

function Planet({planet}){

    return(
        <div className={planet.name}>
           <div className ="planet" style={{ backgroundImage: `url(${planet.image})` }}>
           <div className = "shadow" style={{backgroundImage: `url(${planet.shadow})`}}></div>
            </div>

        </div>
        

    
    )


}

export default Planet