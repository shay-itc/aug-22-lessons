import { useEffect, useState } from 'react'
import { Routes, Route, useParams, Link } from 'react-router-dom'
import './App.css';
import Navbar from "./components/Navbar"
import Search from './views/Search';
import Login from './views/Login';
import Movie from './views/Movie';

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <Link to="/search">Search</Link> |
      <Link to="/login">login</Link>
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
        <Route path='/movie/:id' element={<Movie />} />
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