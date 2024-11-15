//EVERY
const tempLondon = [18, 13, 8, 2]
//create a function to be checked
//Check an element to compare if it is true or not
const tempPositive = tempLondon.every(function(value){
    return value >= 0
})

console.log(tempPositive)