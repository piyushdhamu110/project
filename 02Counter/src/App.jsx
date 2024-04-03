import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 10

  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
    // console.log(counter);
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    // console.log(counter);
  };

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  );
}

export default App;
