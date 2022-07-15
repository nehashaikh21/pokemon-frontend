import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
const App = () => {
  const [pdata, setPdata] = useState(null);
  let { id} = useParams();
  useEffect(() => {
    fetch(`https://pokemon3.herokuapp.com/pokemon/${id}/info`)
      .then((res) => res.json())
      .then((data) => {
        setPdata(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {pdata && pdata.name.english && (
        <div key={pdata.id}>
          {/* <h1>{pdata.name.english}</h1> */}
          <h2>Base :</h2>
          <h4>HP:{pdata.base.HP}</h4>
          <h4>Attack:{pdata.base.Attack}</h4>
          <h4>Defense:{pdata.base.Defense}</h4>
          <p><Link to={`/`}>Back to Home</Link></p>
        </div>
      )}
    </div>
  );
};

export default App;