



function NavBar({setPage}){
    function handleClick(e){
        e.preventDefault()
        setPage(e.target.pathname)
    }

    return (
          <nav className="nav">
              <li><a href="#" onClick={handleClick} >Home</a></li>
              <li><a href="#" onClick={handleClick} >Planets<span className="fas fa-caret-down" ></span></a>
                <ul>
                    <li><a>Earth</a></li>
                    <li><a>Mars</a></li>
                    <li><a>Venus</a></li>
                    <li><a>Jupiter</a></li>
                    <li><a>Saturn</a></li>
                    <li><a>Mercury</a></li>
                    <li><a>Uranus</a></li>
                    <li><a>Neptune</a></li>
                </ul>
              </li>
              <li><a href="#" onClick={handleClick} >Learn More</a></li>
              <li><a href="#" onClick={handleClick} >Contact Us</a></li>
          </nav>  
    )
}
export default NavBar