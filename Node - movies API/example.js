const movieObject = {
    1: { title: "movie1" },
    2: { title: "movie1" },
    3: { title: "movie1" },
    4: { title: "movie1" },
    5: { title: "movie1" },
    6: { title: "movie1" },
}

const yearIndex = {
    2000: [2, 3, 4],
    2001: [1, 5]
}


const fileStructure = {
    years: {
        2000: [2, 3, 4],
        2001: [1, 5]
    },
    movies: {
        1: { title: "movie1" },
        2: { title: "movie1" },
        3: { title: "movie1" },
        4: { title: "movie1" },
        5: { title: "movie1" },
        6: { title: "movie1" },
    }
}

fileStructure.years[2000].forEach((id) => {
    console.log(fileStructure.movies[id])
})

// console.log(movieObject[5])