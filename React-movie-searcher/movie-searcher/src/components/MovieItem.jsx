import { Link, useNavigate } from 'react-router-dom'
import "./MovieItem.css";

function MovieItem(props) {
    const { title, image, movieId } = props;

    const navigate = useNavigate()

    return (
        // <Link to={`/movie/${movieId}`}>
        <div className="movie-item">
            <img onClick={() => {
                navigate("/movie/" + movieId)
            }} src={image} alt="" />
            <p>{title}</p>
        </div>
        // </Link>
    )
}

export default MovieItem

