



function NavBar({setPage}){
    function handleClick(e){
        e.preventDefault()
        setPage(e.target.pathname)
    }

    return (
          <nav className="nav">
              <li><a href="#" onClick={handleClick} >Home</a></li>
              <li><a href="#" onClick={handleClick} >Planets</a></li>
              <li><a href="#" onClick={handleClick} >Learn More</a></li>
              <li><a href="#" onClick={handleClick} >Contact Us</a></li>
          </nav>  
    )
}
export default NavBar