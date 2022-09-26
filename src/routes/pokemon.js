import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

const Pokemon = (poke) => {
  
   let pokedata = [poke.pokemon].flat(2);
   const [input, setInput] = useState("");
   const [searchResult, setsearchResult] = useState(pokedata);
   
  //  console.log(pokedata)

   const handleSearch = (e) => {
      e.preventDefault();
      setInput(e.target.value)
      pokedata = pokedata.filter((pokemon) => pokemon.name.english.toLowerCase().includes(input.toLowerCase()))
      setsearchResult(pokedata)         
  };
 
  // console.log(searchResult)
    return (
   <>
   <div className='pokelist'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" style={{ width:"200px" }}/>
    </div>
    <div className='pokelist'>
    <center>
    <Form className='search text-center' onSubmit={handleSearch}>   
    <Row>
      <Col><Form.Control type="input" placeholder='Search Pokemon' className='form-control' id="input" value={input} onChange={handleSearch} /> </Col>
      <Col><Button variant='warning' style={{ paddingLeft: "-100px" }} onClick={handleSearch}>Search</Button></Col>
    </Row>  
    </Form>
    </center>
    </div>
    <div className="pokemon-container">
      {searchResult && searchResult.map((pk) => {
                    return(
                        <li key={pk.id}>                        
                          <Card className='card' >
                            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pk.id}.png`} style={{ width: "120px" }} />
                            <Card.Body>
                              <h5>{pk.name.english}</h5>
                              <Link to={`/pokemon/${pk.id}`}>View Details</Link>
                              <Button variant='warning'>Select Pokemon</Button>
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