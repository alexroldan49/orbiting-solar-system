import sun from "./Images/sun.png"


function Sun(){
    return(
        <button className="sun" id="btn" >
            <img className="star" src={sun} alt="sun"/>
        </button>
    )
}

export default Sun