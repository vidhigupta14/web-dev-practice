"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    const data = {
      name: "Vidhi",
      age: 20
    }
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
  }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleClick}>
        Click me to interact with the API
      </button>
    </div>
  );
}
