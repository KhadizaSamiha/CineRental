
import Footer from "./components/Footer"
import { useContext } from "react";
import { ThemeContext } from "./context";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MovieList";

export default function Page() {
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className={`h-full w-full ${darkMode ? "bg-background text-white" : ""}`}>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </main>
            <Footer />
        </div>
    );
}
