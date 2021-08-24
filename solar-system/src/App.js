import Sun from "./components/Sun"
import Earth from "./components/Earth"
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Planet from "./components/Planet";
import { useEffect, useState } from "react";



function App() {
  const API = "http://localhost:3000/planets"

 const [planets, setPlanets] = useState([])
 
  useEffect(()=>{
  fetch(API)
  .then(r => r.json())
  .then(data => setPlanets(data))
  },[])
  

  const mappedPlanets = planets.map((planet)=>{
    return <Planet key={planet.id} planet={planet} />
  })

  return (
    <div>
      {mappedPlanets}
      {/* <Sun className="sun"/>
      <Mercury />
      <Venus className="venus" />
      <Earth/> */}
     
    </div>
  );
}

export default App;
