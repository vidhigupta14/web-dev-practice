import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const [error, setError] = useState('')

  function submit() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  const handleInput = async () => {
    setIsDisabled(true);
    await submit()
    const username = document.querySelector("input[type='username']").value;
    const password = document.querySelector("input[type='password']").value;
    if (username.length < 3) {
      setError('Username must be at least 3 characters');
      setIsDisabled(false);
      return;
    }
    setError('');
    console.log({username, password});
    setIsDisabled(false);
  }
  return (
    <>
    <div className="inputs">
      <input type="username" placeholder='username'/>
      <input type="password" placeholder='password' />
    </div>
    <div className="error">{error}</div>
      <button onClick={handleInput} disabled={isDisabled}>Submit</button>
    </>
  )
}

export default App
