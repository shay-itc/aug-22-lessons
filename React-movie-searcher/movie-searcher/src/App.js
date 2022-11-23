import { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar"
import Search from './views/Search';
import Movie from './components/Movie';
import Login from './views/Login';

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getSearchTerm = async (term) => {
    setSearchTerm(term);
    const fetched = await fetch(`https://www.omdbapi.com/?apikey=87dd0709&type=movie&s=${term}`)
    const response = await fetched.json()

    // setMovies(response.Search)
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
      {/* <div className="container">
        <Navbar onSearch={getSearchTerm} />
        {showMovies()}
      </div> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/search'>
          <Route path=':term' element={<Search />} />
          <Route path='' element={<Search />} />
        </Route>
        <Route path='*' element={<Login />} />
      </Routes>
    </div>
  );
}

//search/batman

export default App;


// Add the router to the project
// create 3 routes
// Login
// Search - also add the search terms as param
// Movie - also add the movie id as param