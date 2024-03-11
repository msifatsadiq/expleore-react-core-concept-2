import { useDeferredValue, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'

function App() {
  function handleClick() {
    alert('clicked')
  }
  const handelCLick2 = () => {
    alert('button2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concept 2</h3>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handelCLick2}>Click 2</button>
      <button onClick={() => { alert('third clicked') }}>Click 3</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
