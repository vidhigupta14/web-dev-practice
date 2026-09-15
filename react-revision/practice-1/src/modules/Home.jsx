import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [count, setcount] = useState(0);

  // useEffect(() => {
  //   alert("Welcome to the Page");
  // }, [count]);

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
