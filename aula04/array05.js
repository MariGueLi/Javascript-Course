

const num = [5, 6, 7, 8]
//const final = num.pop()
//pop means that I will take off the last item of my array.

//const final = num.shift() //remove the fisrt item.
const final = num.splice(2, 1) //in the index 2, remove 1 item
console.log(num)
console.log(final)
