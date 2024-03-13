import React, { useState, useEffect } from "react";
import AppMB from "./Mobile/AppMb";
import AppPC from "./PC/AppPC";
import "./App.css";
import HeaderContextProvider from "./data/context";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContextProvider>
      <div>{windowWidth > 1080 ? <AppPC /> : <AppMB />}</div>
    </HeaderContextProvider>
  );
}

export default App;
