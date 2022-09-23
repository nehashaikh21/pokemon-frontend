import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Pokemon = (poke) => {
  
   const pokedata = [poke.pokemon].flat(2);
   
   console.log(pokedata);
    return (
   <>
   <div className='pokelist'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" style={{ width:"200px" }}/>
    </div>
    
    <div className='pokelist'> 
      <input type="text" /> <Button>Search</Button>
    </div>
   
    <div className="pokemon-container">
      {pokedata.map((pk) => {
                    return(
                        <li key={pk.id}>
                          
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pk.id}.png`}  />
      <Card.Body>
        <h4>{pk.name.english}</h4>
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