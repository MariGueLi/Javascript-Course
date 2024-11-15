//there are 2 kinds of functions:
//function Declaration = give a name.

function movie() {
    console.log('The Matrix')
}

movie()

//Function Expression

//-don't give a name cause it is a Expression. 
//-if it is without name, the only way to identify it is when 
//I use a variable there. It can be with CONST or LET.
const car = function() {
    console.log('Tesla')
}

car()

const truck = car

truck()

//In the first one: Gave a name to it and called this name.
//In the second, used a variable and called this variable.


//HOISTING - in the function expression the function is associated
//to the variable. It can't change the order.