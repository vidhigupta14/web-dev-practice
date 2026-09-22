// import Image from "next/image";
"use client"
import { submitAction } from "@/app/actions/form";

export default function Home() {
  async function handleOnClick() {
    let data={ name: "Vidhi", age: 21}
    let a = await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify(data)
    })
    let res = await a.json()
    console.log(res)
  }

  return (
    <>
      <div>I am homepage</div>
      <button onClick={handleOnClick}>Click me to check reqs</button>
      <form action={submitAction}>
        <input type="text" name="name" id="name" placeholder="Enter your name" />
        <input type="text" name="age" id="age" placeholder="Enter your age" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
