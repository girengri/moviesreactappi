//Aca como props pasamos y destructuramos de una vez el movie que nos da el MovieGrid
//en image url pasamos la linea de codigo constante y le concatenamos la otra parte de la url
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
            <img
                width={230}
                height={345}
                className={styles.movieImage}
                src={imageUrl}
                alt=""
            />

            <div>{movie.title}</div>
            </Link>
        </li>
    );
}
