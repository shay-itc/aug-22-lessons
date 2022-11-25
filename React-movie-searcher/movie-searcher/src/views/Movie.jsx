import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import localforage from "localforage";
import { AuthContext } from "../context/AuthContext"

function Movie() {

    const { authApiKey } = useContext(AuthContext);

    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(false)

    const getMovieDetails = async () => {

        let results = await localforage.getItem(id);
        if (!results) {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${authApiKey}&i=${id}`)
            results = await response.json();
            await localforage.setItem(id, results)
        }

        setMovieDetails(results);
    }

    useEffect(() => {
        if (authApiKey && authApiKey != '') {
            getMovieDetails()
        }
    }, [authApiKey])

    return (<>

        {
            movieDetails ?
                (
                    <div>
                        <h1>{movieDetails.Title}</h1>
                        <h4>{movieDetails.Year}</h4>
                    </div>
                )
                : (<h3>Loading...</h3>)
        }

    </>)
}

export default Movie;