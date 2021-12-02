import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Details } from "./pages/Details";
import { Landing } from "./pages/Landing";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>Peliculas</h1>
                </Link>
                {/*En link relaciono los links, como un menu de navegacion y en los routes relaciono que se va a mostrar
                en esas paginas al momento de darle click */}
                {/* <Link to="/">Home</Link>
                <Link to="/movie">Movie</Link> */}
            </header>

            <main>
                <Routes>
                    <Route exact path="/movies/:movieId" element={<Details />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </main>
        </Router>
    );
}
