import './App.css'
import { useState } from "react";

function App() {

  let [counter, setcounter] = useState(0);

  const addvalue =()=>{
    setcounter(counter+1)
  }

  const removevalue =()=>{
    setcounter(counter-1)
  }
  

  return (
    <>
      <h1>count value: {counter}</h1>
      <button onClick={addvalue}>add value</button>
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
