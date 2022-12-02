import { useState, useEffect, useRef } from "react";

let myTimeout;

export default function LoaderPage() {

    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState('');

    const searchField = useRef()

    const RunOperation = () => {

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }

    // useEffect(() => {

    //     clearTimeout(myTimeout);
    //     myTimeout = setTimeout(() => {
    //         console.log('XXXXX', inputValue)
    //     }, 300)

    // }, [inputValue])

    const fetchResults = async (term) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=87dd0709&type=movie&s=${term}`)
            const results = await response.json();

            setSearchResults(results.Search)
        } catch (e) {
            setSearchResults(null)
            console.log(e)
        }
    }

    const inputChanged = () => {
        clearTimeout(myTimeout);
        myTimeout = setTimeout(() => {
            fetchResults(searchField.current.value)
        }, 200)
    }

    console.log('Rerender', searchResults)

    return (
        <>
            <button onClick={() => {
                RunOperation()
            }}>Start Loader</button>
            {isLoading ? <span>Loading...</span> : null}

            <br />
            <br />
            <br />

            <input ref={searchField} onChange={inputChanged} type="text" />
        </>
    )
}


// Once we have a value - send a request to the API
// And store the response
// Change implementation to useRef