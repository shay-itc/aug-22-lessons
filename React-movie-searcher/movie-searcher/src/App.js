import { useEffect, useState } from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import Movie from './components/Movie';


function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getSearchTerm = async (term) => {
    setSearchTerm(term);
    const fetched = await fetch(`https://www.omdbapi.com/?apikey=87dd0709&type=movie&s=${term}`)
    const response = await fetched.json()

    setMovies(response.Search)
  }

  const showMovies = () => {
    return movies.map(
      (movie, index) => {
        console.log('index', index)
        return (<Movie key={`movie-${index}`}
          movieIndex={index}
          movieName={movie.Title}
          movieImage={movie.Poster}
          clickedMovie={movieClicked} />);
      }
    )
  }

  const movieClicked = (index) => {
    console.log('clickedMovie', index)

    movies.splice(index, 1)
    setMovies([...movies])
  }

  return (
    <div className="App">
      <div className="container">
        <Navbar onSearch={getSearchTerm} />
        {showMovies()}
      </div>
    </div>
  );
}

export default App;
