import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
// @ts-ignore
import About from "docs/About";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => {
      const newValue = prev + 1;

      window.dispatchEvent(
        new CustomEvent("counter:changed", {
          detail: newValue,
        }),
      );

      console.log("dispatchEvent", newValue);
      return newValue;
    });
  };

  localStorage.setItem("test11", counter.toString());

  return (
    <div>
      <div>Web module</div>

      <Link to="/docs">Перейти на страницу /about</Link>

      <div>Counter: {counter}</div>

      <button onClick={increment}>+</button>

      <About />

      <Outlet />
    </div>
  );
}
