import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const App = () => {
  const [pdata, setPdata] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://pokemon3.herokuapp.com/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPdata(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="pokedata-container">
      {pdata && pdata.id && pdata.name.english && (
        <div key={pdata.id}>
          <h1>{pdata.name.english}</h1>
          <h3>French Name :{pdata.name.french}</h3>
          <h3>Japanese Name :{pdata.name.japanese}</h3>
          <h2>Type :</h2>
          <h4>
            {pdata.type.map((t) => (
              <li>{t}</li>
            ))}
          </h4>
          <h2>Base :</h2>
          <h4>HP:{pdata.base.HP}</h4>
          <h4>Attack:{pdata.base.Attack}</h4>
          <h4>Defense:{pdata.base.Defense}</h4>
          <p><Link to={`/pokemon/${pdata.id}/baseinfo`}>View More</Link></p>
        </div>
       
      )}
    </div>
  );
};

export default App;
