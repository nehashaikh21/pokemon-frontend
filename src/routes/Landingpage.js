import { Link } from 'react-router-dom';

const Landingpage = () =>{
    return(
        <>
        <div className='landing'>
            <img src='./videos/battle.png' className='title' />
            <div className='pokeball'>
                <Link to={`/pokemon`}><img src='./videos/poke2.gif' /></Link>
            </div>
        </div>
        </>
    )
}

export default Landingpage;