import styles from "./Details.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { obtener } from "../utils/httpClient";

export function Details() {
    //Capturamos el id de la pelicula para poder ver mas detalles de esta
    const { movieId } = useParams();
    //Vamos a mostrar la pelicula que tenga ese Id, Para hacer la llamada asyn utilizamos useEffect
    //Despues de obtener la data con useEffects siempre hay que ponerle un estado a la promesa con useState

    const [movie, setMovie] = useState(null); //El estado inicial de este es null

    useEffect(() => {
        obtener("/movie/" + movieId).then((data) => {
            setMovie(data);
        });
    }, [movieId]); //El array en este caso no va vacio porque depende del movieId

    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl}
                alt={movie.title}
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title: </strong>
                    {movie.title}
                </p>
                <p>
                    {" "}
                    <strong>Genres: </strong>{" "}
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Description: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}
