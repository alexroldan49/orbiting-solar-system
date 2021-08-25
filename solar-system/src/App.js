
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
      <ul className="wrapper">{mappedPlanets}</ul> 
      
    </div>
  );
}

export default App;
