import Planet from "./components/Planet";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Sun from "./components/Sun";
import PlanetPage from "./components/PlanetPage";


function App() {
  const API = "http://localhost:3000/planets"

 const [planets, setPlanets] = useState([])

 const [page, setPage]= useState("/")
 
 
  useEffect(()=>{
  fetch(API)
  .then(r => r.json())
  .then(data => setPlanets(data))
  },[])
  
  function handleChange(){
    return console.log("working")
  }

  const mappedPlanets = planets.map((planet)=>{
    return <Planet setPage={setPage} key={planet.id} planet={planet}  />
  })

  const mappedPlanetPage = planets.map((planet)=>{
    return (
        <Route path={`/${planet.name}`} >
          <PlanetPage planets={planets} setPlanets={setPlanets} planet={planet} API={API} />
          </Route>
    )
  })
  return (

    <>
      <NavBar planets={planets} setPlanets={setPlanets} setPage={setPage} className="nav" />
      <Switch>
        <Route exact path="/">
          <ul className="wrapper" >
            <Sun/>
            {mappedPlanets}
          </ul>
        </Route>
        {mappedPlanetPage}
      </Switch>
    </>
  );
}

export default App;
