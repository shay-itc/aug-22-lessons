import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import MovieItem from '../components/MovieItem';
import "./Search.css";
import { AuthContext } from '../context/AuthContext';
import { getMovies } from '../helpers/api';

function Search() {

    const { term } = useParams();
    const navigate = useNavigate()

    const { authApiKey } = useContext(AuthContext);

    const [movieName, setMovieName] = useState(term);
    const [movieList, setMovieList] = useState([]);

    const fetchFromAPI = async () => {
        const results = await getMovies(authApiKey, movieName);
        if (results.success) {
            setMovieList(results.results);
            navigate("/search/" + movieName)
        } else {
            alert(results.message)
        }
    }

    const renderMovieList = () => {
        return movieList.map((movie, index) => {
            return (<MovieItem
                key={`movie-item-${index}`}
                title={movie.name}
                image={movie.poster}
                movieId={movie.id} />)
        })
    }

    return (
        <div className="search-container">
            <div className='inner-search'>

                <TextInput label="Movie Name"
                    defaultValue={movieName}
                    type="text"
                    onInputChange={(eventValue) => {
                        setMovieName(eventValue)
                    }} />

                <Button type="primary" text="Search!" onClick={() => {
                    fetchFromAPI();
                }} />

            </div>
            <div className='search-results'>
                {
                    movieList.length > 0 ? renderMovieList() : null
                }
            </div>

        </div>
    )
}

export default Search;

// Using the movie list in the state display the 
// list posters under the search form

