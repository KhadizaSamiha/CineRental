import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="">
        <Header />

        <main>
          <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar/>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
