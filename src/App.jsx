import { useState } from "react";
import "./App.css";
import MovieList from "./components/cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context/index.js";

function App() {
  const [cartData, setCartData] = useState([]);
  console.log(cartData)
  return (
    <MovieContext.Provider value={{cartData, setCartData}}>
      <div className="">
        <Header />

        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar/>
            <MovieList/>
          </div>
        </main>

        <Footer />
      </div>
    </MovieContext.Provider>
  );
}

export default App;
