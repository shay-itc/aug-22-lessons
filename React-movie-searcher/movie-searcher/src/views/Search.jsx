import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import "./Search.css";
import { AuthContext } from '../context/AuthContext';
import { getMovies } from '../helpers/api';

function Search() {

    const { term } = useParams();

    const { authApiKey } = useContext(AuthContext);

    const [movieName, setMovieName] = useState(term);
    const [movieList, setMovieList] = useState([]);

    const fetchFromAPI = async () => {
        const results = await getMovies(authApiKey, movieName);
        if (results.success) {
            setMovieList(results);
        } else {
            alert(results.message)
        }
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
        </div>
    )
}

export default Search;

// Using the movie list in the state display the 
// list posters under the search form