import React, { useState } from "react";

import { useParams } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

function PlayGround(poke) {

    let [randomNum, setRandomNum] = useState(0);
    let [attach, setAttach] = useState(100);
    let  number;

    const { id } = useParams();
    let pokedata = [poke.pokemon].flat(2);
    const findPokemon = pokedata.find((poke) => parseInt(id) === poke.id);

    function getRandomNum() {
        const num = Math.ceil(Math.random() * Math.floor(809))
        return setRandomNum(num);
    }
    const Opponent = pokedata[randomNum];

    const handleNewOpponent = (event) => {
        getRandomNum();

      };
      setAttach(findPokemon.base.Attack);
       const handleAttach = (event) => {
       number = attach-10;

      };

    return (
        <>
            <div className="selected-details">
                <img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${findPokemon.id}.png`}
                    style={{ width: "120px" }} alt='pokemon image' />
            </div>
           <div>
               <ProgressBar now={number} variant='danger' />;
           </div>
           <button className="btn btn-warning" onClick={event => handleAttach(event)} >Attack</button> 


            <div className="selected-Opponenet">
                <img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Opponent.id}.png`}
                    style={{ width: "120px" }} alt='pokemon image' />
            </div>
            <div>   <ProgressBar now={attach} variant='danger' />
            </div>
            <button className="btn btn-warning" onClick={event => handleNewOpponent(event)} >Choose Another</button> 
        </>
    );
}
export default PlayGround;