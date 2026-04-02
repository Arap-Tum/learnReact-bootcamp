import "./App.css";
import { useState } from "react";

import { Header } from "./Header";
import { User } from "./User";
import { Welcome } from "./Welcome";

function App() {
  const [count, setCount] = useState(0);

  function incremeant() {
    setCount(count + 1);
  }

  const name = "kibet";
  return (
    <>
      <Header />
      <h1>Hello {name} </h1>;
      <Welcome name="Brian " />;
      <User name="Brian" age={23} />

      <div>
        <p>You clicked {count} times</p>
        <button onClick={incremeant}>Increment</button>

         <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      </div>
    </>
  );
}

export default App;
