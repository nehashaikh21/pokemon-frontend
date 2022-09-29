import ReactCardFlip from "react-card-flip";
import React, {useState} from 'react';
import '../AllCards.css';
import { Button } from "react-bootstrap";
import PlayGround from "./PlayGround";

export default function AllCards({ name, pokeid, data }) {
    const newData = [data].flat(2);
    const [isFlipped, setIsFlipped] = useState(false);
    const pokemon = newData.filter((e) => e.id === pokeid)
    console.log(pokemon)


   
    const [selected, setSelected] = useState('');
    const handleClick= () =>{
    const cardData=data.filter((object) => object.id== pokeid)
    setSelected(cardData);
    console.log(selected)
    // alert('selected For fight');
  
    }


    return (
      <>
       <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
            <div className='card-container'>
                <div className="image-conatiner">
                    <img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`} style={{ width: "120px" }} alt='pkemon image' />
                </div>

                <div className="card-content">
                    <div className="card-name">
                        <h4> {name}</h4>
                    </div>

                    <div className="card-btn">
                        <button className=' btn-gradient-2' onClick={() => setIsFlipped((prev) => !prev)}>Details
                            {/* <Link to={`/pokemon/${pokeid}`} style={{ textDecoration: 'none', color: 'white' }} >Find  Details</Link> */}
                        </button>
                        <br />
                        <br />
                        <button className="btn btn-warning" onClick={event => handleClick(event, pokeid)} >Select Pokemon </button>
                        <PlayGround data={selected} allpokedata={newData}/>
                        {/* <Button variant="warning" >
                            <Link to={`/PlayGround/${pokeid}`} style={{ textDecoration: 'none', color: 'white' }} >Select Pokemon </Link>
                        </Button> */}
                    </div>
                </div>
            </div>
       </div>
      <div>
      <div className='card-container'>
                

                <div className="card-content">
                    <div className="card-name">
                        <h4> {name}</h4>
                        {pokemon.map((pk)=>{
                            return(
                                <li>
                                    <h5>Type :</h5>
                                    <h6>
                                        {pk.type.map((t) => (
                                            <li>{t}</li>
                                        ))}
                                    </h6>
                                    <h6>HP:{pk.base.HP}</h6>
                                    <h6>Attack:{pk.base.Attack}</h6>
                                    <h6>Defense:{pk.base.Defense}</h6>
                                </li>
                            )
                        })}
                    </div>

                    <div className="card-btn">
                        <Button onClick={() => setIsFlipped((prev) => !prev)}>Back</Button>
                        <br />
                        <br />
                        <button className="btn btn-warning" onClick={event => handleClick(event, pokeid)} >Select Pokemon </button>
                        <PlayGround data={selected} allpokedata={newData}/>
                        {/* <Button variant="warning" >
                            <Link to={`/PlayGround/${pokeid}`} style={{ textDecoration: 'none', color: 'white' }} >Select Pokemon </Link>
                        </Button> */}
                    </div>
                </div>
            </div>
      </div>
    </ReactCardFlip>
  
        
        </>   
    )
}
