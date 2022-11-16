import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Search() {

    const { term } = useParams();

    const search = async (term) => {
        // await fetch("http://myapi.com?search=" + term)
    }

    useEffect(() => {

        search(term);

    }, [term])

    return (
        <div>
            Search {term}
            <br />
            <Link to="/">Home</Link>
        </div>
    )
}

export default Search;
