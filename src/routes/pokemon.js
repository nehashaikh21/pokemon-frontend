
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

const Pokemon = (poke) => {
  
   const pokedata = [poke.pokemon].flat(2);
   
   console.log(pokedata);
    return (
   <>
    <h1>PokemonList</h1>

    <div className="pokemon-container">
      {pokedata.map((pk) => {
                    return(
                        <li key={pk.id}>
                          
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{pk.name.english}</Card.Title>
        <Link to={`/pokemon/${pk.id}`}>View Details</Link>
      </Card.Body>
    </Card>
           
                           </li>
                    )
                })}
</div>  
   </>
    )
  };
  
  export default Pokemon;