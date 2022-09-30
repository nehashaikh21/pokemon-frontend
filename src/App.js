import react, {useState, useEffect} from "react";
import './App.css';
import Pokemon from "./routes/pokemon.js";
import {Routes, Route} from 'react-router-dom';
import PokeDetails from "./routes/pokedetails.js";
import PlayGround from "./routes/PlayGround.js";
import Landingpage from "./routes/Landingpage";


const cors=require("cors");

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [url,setUrl]= useState("https://pokemon3.herokuapp.com/pokemon")
  useEffect(() => {
    const fetchPokemon = () =>{
      //https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
    fetch(url)
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
     
    <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/pokemon" element={<Pokemon pokemon={pokemon} url={url}/>} />
        <Route path="/pokemon/:id" element={<PokeDetails pokemon={pokemon}/>} />
        <Route path="/pokemon/:name" element={<Pokemon pokemon={pokemon}/>} />
        <Route path="/PlayGround/:id/fight" element={<PlayGround pokemon={pokemon} />} />

</Routes>
     
    </div>
  );
}

export default App;
