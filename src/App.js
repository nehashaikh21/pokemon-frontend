import react, {useState, useEffect} from "react";
import './App.css';

const cors=require("cors");

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchPokemon = () =>{
    fetch("https://pokemon3.herokuapp.com/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      setPokemon(data)})
        .catch((error) => console.log(error))
    }    
    console.log(fetchPokemon())
  }, []);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
