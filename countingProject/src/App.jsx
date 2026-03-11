import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncreament(){
    setCount(prev=>prev+1);
  }
  function handleDecreament(){
    setCount(prev=>prev-1);
    if(count<=0){
      setCount(0);
    }
  }
  return (
    <>
      <h1>{count}</h1>
     <button onClick={handleIncreament}>Increment</button>
     <button onClick={handleDecreament}>Decrement</button>
    </>
  )
}

export default App
