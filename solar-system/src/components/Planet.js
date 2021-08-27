

function Planet({planet, setPage}){

    function changePage(){
       return setPage(`/${planet.name}`)
    }
    return(
        
        <div className={planet.name}>
           <div onClick={()=>changePage()}  className ="planet" style={{ backgroundImage: `url(${planet.image})` }}>
           <div className = "shadow" style={{backgroundImage: `url(${planet.shadow})`}}></div>
            </div>

        </div>
        
    
    )


}

export default Planet