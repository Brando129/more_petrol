/* A vehicle needs 10 times the amount of fuel than the distance it travels.
However, it must always carry a minimum of 100 fuel before setting off.
Create a function which calculates the amount of fuel it needs, given the distance */

function enoughFuel(distance){
    var fuel = distance * 10

    if(fuel < 100){
        console.log(Math.round(fuel))
        return "Sorry, we've got to get some more gas."
    }
    else{
        console.log(Math.round(fuel))
        return "Ready to ride!"
    }
}

console.log(enoughFuel(23.5))