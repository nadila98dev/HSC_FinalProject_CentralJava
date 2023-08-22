import { useState } from "react";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Nav />
    <div className="bg-gray-600 w-full h-screen"></div>

    </>
    )
}

export default App;
