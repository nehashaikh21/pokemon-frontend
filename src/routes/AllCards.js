
import React from 'react';
import './AllCards.css';
import { Link } from 'react-router-dom';


export default function AllCards({ name, pokeid, data }) {
    const newData = [data].flat(2);

    return (
      <>
        <div className='card-container'>

            <div className="image-conatiner">
                <img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`} style={{ width: "120px" }} alt='pkemon image' />
            </div>

            <div className="card-content">
                <div className="card-name">
                    <h2> {name}</h2>
                </div>

                <div className="card-btn">
                        <button className=' btn-gradient-2'>
                            <Link to={`/pokemon/${pokeid}`}>Find  Details</Link>
                        </button>
                        <br />
                        <br />
                           {/* <button className="btn btn-warning" onClick={event => handleClick(event, pokeid)} >Select Pokemon </button> */}
                        <button className="btn btn-warning" >
                            <Link to={`/PlayGround/${pokeid}`} style={{ textDecoration: 'none' }} >Select Pokemon </Link>
                        </button>

                </div>
            </div>

        </div>
        </>   
    )
}
