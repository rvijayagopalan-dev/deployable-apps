
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/artifacts')
      .then(response => setArtifacts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>RunSoft Architecture Artifacts</h1>
      <ul>
        {artifacts.map(artifact => (
          <li key={artifact.id}>{artifact.name} - {artifact.layer}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
