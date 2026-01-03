import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    let res = await r.text()
    console.log(data, res)
    // await delay()
    console.log(data)
  }

  return (
    <>
      {isSubmitting && <div>Submitting form...</div>}
      <form action="" className='inputs' onSubmit={handleSubmit(onSubmit)}>
        <input type="username" placeholder='username' {...register("username", { required: true, minLength: { value: 3, message: "Username must be minimum 3 characters" }, maxLength: { value: 8, message: "Username must be at most 8 characters" } })} />
        {errors.username && errors.username.message}
        <input type="password" placeholder='password' {...register("password")} />
        <input type="submit" disabled={isSubmitting} />
      </form>
    </>
  )
}

export default App
