import "./App.css";
import { useState } from "react";
import Profile from "./components/Profile";
import ProductList from "./components/ProductList";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const firstname = "John";
  const lastname = "Smith";
  return (
    <div>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <Profile firstname={firstname} lastname={lastname} />
      <ProductList />
    </div>
  );
};

export default App;
