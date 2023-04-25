// const BASE_URL = 'http://localhost:3000';

// const newMovie = {
//     title: "HTML",
//     director: "Oleh Tsap",
//     genres: [
//         "Drama",
//         "Romance"
//     ],
//     rating: 8.8
// }

// const options = {
//     'method': 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(newMovie)
// }

// fetch(`${BASE_URL}/movies`, options)
//     .then(res => res.json())
//     .then(console.log)




// function addNewMovie(newMovie) {
//     const options = {
//         'method': 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(newMovie)
//     }
//     return fetch(`${BASE_URL}/movies`, options)
//     .then(res => res.json())
//     .then(console.log)
// }

// addNewMovie(
//     {
//     title: "JS",
//     director: "Oleh Tsap",
//     genres: [
//         "Comedy",
//         "Drama",
//         "Romance"
//       ],
//       "rating": 8.8
//     }

// )
    
// function updateMovieById(update, movieId) {
//     const options = {
//         'method': 'PATCH',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(update)
//     }
//     return fetch(`${BASE_URL}/movies/${movieId}`, options)
//     .then(res => res.json())
//     .then(console.log)
// }

// updateMovieById(
//     {
//         "title": "Desktop",
//       "director": "Oleh Tsap",
//       "genres": [
//         "Action",
//         "Adventure",
//         "Drama"
//       ],
//         "rating": 8.8
//     }, 9
// )

// function getMovies() {
//     fetch('http://localhost:3000/movies')
//     .then(response => response.json())
//     .then(console.log)
// }

// function getMovieById(movieId) {
//     fetch(`http://localhost:3000/movies/${movieId}`)
//     .then(response => response.json())
//     .then(console.log)
// }


// function deleteMovieById(movieId) {
//     fetch(`${BASE_URL}/movies/${movieId}`, { method: `DELETE` })
//     .then(res => res.json())
//     .then(console.log())
// }

// deleteMovieById(23)
