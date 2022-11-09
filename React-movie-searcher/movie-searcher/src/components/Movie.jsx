function Movie(props) {
    const { movieName, movieImage, movieIndex, clickedMovie } = props;

    return (
        <div onClick={() => {
            clickedMovie(movieIndex)
        }}>
            {/* <img src="https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="" /> */}
            <p>{movieName}</p>
        </div>
    )
}

export default Movie

