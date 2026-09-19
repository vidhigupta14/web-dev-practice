// import React from 'react'
import "./App.css"

import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {
    console.log(data)
    reset();
    let r=await fetch("http://localhost:3000/", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)})
    let res=await r.text()
    console.log(res)
  }


  // console.log(watch("example")) // watch input value by passing its name


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("username")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}