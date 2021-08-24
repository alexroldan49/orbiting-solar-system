

function Planet({planet}){

    return(
        <div className={planet.name}>
            <img src={planet.image} />
        </div>
    )
}

export default Planet