import { useEffect, useState } from 'react';

import './App.css';

function App() {

  // status holds what we show on screen; it starts as 'checking...'

  const [status, setStatus] = useState('checking...');

  useEffect(() => {

    fetch('http://localhost:3000/health')       // ask the API

      .then((res) => res.json())                // read the reply as JSON

      .then((data) => setStatus(data.status))   // 'ok' -> put it on screen

      .catch(() => setStatus('unreachable'));   // request failed -> say so

  }, []);                                       // [] = run once, on first load

  return (

    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>

      <h1>QuickCart</h1>

      <p>Backend status: {status}</p>

    </div>

  );

}

export default App;