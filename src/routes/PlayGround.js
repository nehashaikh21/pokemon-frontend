import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Row, Col, Alert } from "react-bootstrap";

function PlayGround(poke) {

    const [randomNum, setRandomNum] = useState(0);
    const [energy, setEnergy] = useState(100);
    const [openergy, setOpenergy] = useState(100);
    const [turn, setTurn] = useState(0);

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
        setOpenergy(100);
        setEnergy(100)
      };
      

      const game = (event) => {
        if(turn === 0){
                setOpenergy((oldenergy)=>{
                    return oldenergy-20;
                });
                setTurn(1);
              }  
              setEnergy((old)=>{
                return old-findPokemon.base.Attack});
                setTurn(0);    
                
                if(energy === 0){
                    alert("You Lose")
                }
                if(openergy === 0){
                    alert("You Win")
                }
      }   
      
      
    return (
        <div className="playground">
        <Row>
            <Col>
            <div className="selected-details">
                <img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${findPokemon.id}.png`}
                    style={{ width: "120px" }} alt='pokemon image' />
            </div>
           <div>
               <ProgressBar now={energy} variant='danger' animated striped />
           </div>
           <div className="attack">
           <button className="btn btn-warning" onClick={event => game(event)} >Attack</button> 
           </div>
           </Col>
           <Col>
            <div className="selected-Opponent">
                <img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Opponent.id}.png`}
                    style={{ width: "120px" }} alt='pokemon image' />
            </div>
            <div>   <ProgressBar now={openergy} variant='danger' animated striped />
            </div>
            <div>
            <button className="btn btn-warning" style={{ marginTop: "20px" }} onClick={event => handleNewOpponent(event)} >Generate Another Pokemon</button>
            </div> 
            </Col>
        </Row>
        </div>
    );
}
export default PlayGround;

