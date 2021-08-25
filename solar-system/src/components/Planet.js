

function Planet({planet}){

    return(
        <div className={planet.name}>
            <img className = "planet" src={planet.image} />
            <div className = "shadow"></div>
        </div>
        

    
    )


}

export default Planet