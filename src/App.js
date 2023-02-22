import './App.css'
import {useEffect, useState } from 'react';

function App() {

  // primer posicion: valor inicial
  //Segunda posición: función que va alterar variable
  const [counter, setCounter] = useState(0);
  const [style, setStyles] = useState('min');

  const handleAddition = () => {
    setCounter(counter+1)
  }

  const handleRest = () => {
    setCounter(counter-1)
  }

  const handleReset = () => {
    setCounter(0)
  }

  useEffect (()=>{
    counter >= 10 ? setStyles('max'):setStyles('min')
  },[counter]);

  return (
    <div className="App">
      <h2 className={style}>{counter}</h2>
      <button onClick={handleAddition}>Sumar</button>
      <button onClick={handleRest}>Restar</button>
      <button onClick={handleReset}>Resetear</button>
    </div>
  )
}

export default App