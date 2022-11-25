import { Link, redirect } from 'react-router-dom'
import "./MovieItem.css";

function MovieItem(props) {
    const { title, image, movieId } = props;

    return (
        <Link to={`/movie/${movieId}`}>
            <div className="movie-item">
                <img src={image} alt="" />
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default MovieItem

