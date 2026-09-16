import { useState, useEffect, useRef } from "react";
import "./Home.css";

const Home = () => {
  const [count, setcount] = useState(0);

  const num = useRef(0)
  useEffect(() => {
    num.current = num.current + 1;
    console.log(`useEffect called ${num.current}`);
  }, [count]);

  return (
    <>
      <div className="home-container">
        <h1>Welcome to the Page {count}</h1>
        <button onClick={() => setcount(count + 1)}>Click Me</button>
      </div>
    </>
  );
};

export default Home;
