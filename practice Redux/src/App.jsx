import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/counterSlice'
import Nav from './components/Nav.jsx'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Nav />
      <div className="body">
        <div className="App">
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span>{count}</span>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: 'counter/multiply' })}>
            *2
          </button>
        </div>
      </div>
    </>
  )
}

export default App
