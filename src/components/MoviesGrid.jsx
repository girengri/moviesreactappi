import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { obtener } from "../utils/httpClient";

//Recorremos la info de las peliculas con un map y le estamos mostrando el titulo y me lo guarda en un li
//Siempre hay que ponerle un id al li, para poder renderizarlo despues adecuadamente
export function MoviesGrid() {
    //Aca traemos la posicion y la funcion para modificar esa posicion, de el estado al comienzo
    const [movies, setMovies] = useState([]);

    //Este useEffect es un hooks y cuando se cargue la funcion, este seria el efecto secundario
    //Aca obtenemos la data de la api de acuerdo a la documentacion de esta
    useEffect(() => {
        obtener("/discover/movie").then((data) => {
                setMovies(data.results);
            });
        //Agrego un arreglo vacio para que no se ejecute el componente infinitamente, con esto le decimos que se ejecute una vez
    }, []);
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
            })}
        </ul>
    );
}
