import React, { useState } from 'react';

function App() {
  const [rickMorty, setRickMorty] = useState(null);

  const onClick = async() => {
    try {
      const response = await fetch('http://localhost:8888/.netlify/functions/rick-morty');
      const json = await response.json();
      setRickMorty(json);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <button onClick={onClick}>Fetch API</button>

      {
        rickMorty && (
          <div>
            <span>{rickMorty.name}</span>
            <span>{rickMorty.status}</span>
            <img src={rickMorty.image} alt=""></img>
        </div>
        )
      }

    </div>
  );
}

export default App;
