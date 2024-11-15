// how filter and return the values according to the condition of an array
const tempLondon = [18, -13, 8, 2, 0, -3]
// change EVERY for FILTER
//const tempPositive = tempLondon.filter(function(value){
//    return value >= 0
//})

// to convert this function to an arrow function:
const tempPositive = tempLondon.filter (value => value >= 0)

console.log(tempPositive)

//the FILTER works according to the criteria that I have create.