// the total of all item: use arguments

function price() {
    let total = 0
    for (let value of arguments)
        total += value
    return total
}

// it is inside a for loop.
// Define the arguments her: not in the fnction and it will still work.
console.log(price(10, 20, 30, 40))