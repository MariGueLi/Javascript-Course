// remover a função por uma iron function.
//console.log(movies.find(function(movie){
//    return movie.movieName == 'The Matrix'
//}))

//simple sintaxe
// the => is in the place of the function and return.
const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.includes({id: 1, movieName: 'Dejavu'}))

console.log(movies.find(movie => movie.movieName == 'The Matrix'))