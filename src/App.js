import { useState } from "react";
import AllGunData from "./components/AllGunData/AllGunData";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Navbar count={count}></Navbar>
      <AllGunData handleClick={handleClick}></AllGunData>
    </div>
  );
}

export default App;
