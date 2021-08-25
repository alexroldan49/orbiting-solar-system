import Planet from "./components/Planet";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Sun from "./components/Sun";


function App() {
  const API = "http://localhost:3000/planets"

 const [planets, setPlanets] = useState([])

 const [page, setPage]= useState("/")
 
  useEffect(()=>{
  fetch(API)
  .then(r => r.json())
  .then(data => setPlanets(data))
  },[])
  

  const mappedPlanets = planets.map((planet)=>{
    return <Planet key={planet.id} planet={planet} />
  })

  return (

    <>
      <NavBar setPage={setPage} className="nav" />
      <Switch>
        <Route path="/">
          <ul className="wrapper" >
            <Sun/>
            {mappedPlanets}
          </ul>
        </Route>
      </Switch>
    </>
  );
}

export default App;
