export async function getMovies(apiKey, movieName) {
    try {
        const response = await fetch(`http://localhost:3000/movies/search/${movieName}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        const results = await response.json();

        console.log('results', results)

        if (results.Response == 'True') {
            return {
                success: true,
                results: results.Search
            };
        } else {
            // alert('No results found')
            return { success: false, message: "Message 1" }
        }
    } catch (e) {
        // alert('You request had an error')
        // console.log('Error sending request ', e)
        return { success: false, message: "Message 2" }
    }
}