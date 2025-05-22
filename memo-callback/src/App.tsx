import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
