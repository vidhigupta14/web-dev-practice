import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context.js'

const Button = () => {
    const value=useContext(counterContext);
  return (
    <div>
        <button onClick={() => value.setCount((count) => count + 1)}><span>{value.count}</span><br></br>I am a button</button>
    </div>
  )
}

export default Button