import { useReducer, useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context/index.js";
import Page from "./Page.jsx";
import { cartReducer, initialState } from "./reducers/CartReducer.js";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{state, dispatch }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
