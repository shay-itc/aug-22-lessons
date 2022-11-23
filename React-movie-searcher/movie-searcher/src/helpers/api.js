export async function getMovies(apiKey, movieName) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${movieName}`)
        const results = await response.json();

        if (results.Response == 'True') {
            return {
                sucess: true,
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