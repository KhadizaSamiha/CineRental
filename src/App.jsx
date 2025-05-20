import { useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context/index.js";
import Page from "./Page.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cartData, setCartData] = useState([]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
