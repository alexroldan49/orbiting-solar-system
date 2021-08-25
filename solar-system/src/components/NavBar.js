



function NavBar({setPage}){
    function handleClick(e){
        e.preventDefault()
        setPage(e.target.pathname)
    }

    return (
          <nav className="nav">
              <li><a onClick={handleClick} >Home</a></li>
              <li><a onClick={handleClick} >About</a></li>
              <li><a onClick={handleClick} >Comments</a></li>
          </nav>  
    )
}
export default NavBar