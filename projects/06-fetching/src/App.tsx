import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    if (fact) return;

    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setFact(data.fact));
  }, [fact]);

  return (
    <main>
      <h1> App de gatitos </h1>
      <p> {fact} </p>
    </main>
  )
}

export default App
