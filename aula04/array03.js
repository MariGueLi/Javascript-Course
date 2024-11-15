//before it was the primitive itens, how find the refence itens?

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.includes({id: 1, movieName: 'Dejavu'}))//this way doesn't work
//how look for a movie?
console.log(movies.find(function(movie){
    return movie.movieName == 'The Matrix'
}))
//- this one only works if there is a function in.
//- INCLUDES doesn't work when there are many keys,
//then I have to use FIND, but FIND works with FUNCTION.
//Then I create a function and it calls the variable and it returns.
// - the function FIND makes the return.
// it works like: return -> find -> log -> terminal
// array of reference, use FIND, array of primmitive, don't use FIND.
