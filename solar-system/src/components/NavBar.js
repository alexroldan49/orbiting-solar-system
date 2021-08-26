import {Route, Switch, Link} from "react-router-dom"



function NavBar({setPage, planets}){
    function handleClick(e){
        e.preventDefault()
        setPage(e.target.pathname)
    }
    const planetOption = planets.map((planet)=>{
        return (
                <li>
                <Link to={planet.name}>{planet.name}</Link>
                </li>
                
        )
    })

   

    return (
          <nav className="nav">
              
            <Link to="/" >Home</Link>
              
            <li><a href="#" onClick={handleClick} >Planets<span className="fas fa-caret-down" ></span></a>
                <ul>
                    {planetOption}
                </ul>
            </li>
            <li><a href="#" onClick={handleClick} >Learn More</a></li>
            <li><a href="#" onClick={handleClick} >Contact Us</a></li>
          </nav>  
    )
}
export default NavBar