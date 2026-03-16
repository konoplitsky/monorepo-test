import { useEffect, useState } from "react";

const About = () => {
  const [_, setCountState] = useState(0);

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      console.log("customEvent-about", customEvent);

      setCountState(customEvent.detail);
    };

    window.addEventListener("counter:changed", handler);

    return () => {
      window.removeEventListener("counter:changed", handler);
    };
  }, []);

  const getLocalStorage = localStorage.getItem("test11");

  console.log("getLocalStorage", getLocalStorage);

  return (
    <div>
      <h1>About page</h1>
      <div>Count: {getLocalStorage}</div>
    </div>
  );
};

export default About;
