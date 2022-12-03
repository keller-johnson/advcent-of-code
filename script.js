// this is https://github.com/C-Doug-iS code since I couldnt solve it Im trying to study it for learning purposes
const { readFileSync } = require('fs');

//Get input from file
const input = readFileSync('./input_day3.txt', 'utf8');

//take the data and turn it into an array \n is regex for splitting each escaped line into a new array item
const rucksacks = input.split('\n');

//creating a new variable commonItems
//now we are .map every item in the rucksacks array
const commonItems = rucksacks.map(r => {
    //creating two new variables one for each half that splits that element in the array into two
    //using .length and / to equally split the string in two segments -- .slice first param is starting point and second param is where to end
    const firstCompartment = r.slice(0, r.length / 2).split('');
    const secondCompartment = r.slice(r.length / 2).split('');
    //running a function to calculate points depending on which char from first part matches in second part
    return getCharPoints(firstCompartment.filter(e=> secondCompartment.includes(e))[0])
})
//function uses charCodeAt method with an offset to return the proper value for lower case and upper case
function getCharPoints(char) {
    if (char === char.toUpperCase()) {
        return Number(char.charCodeAt(0) - 38)
    } else {
        return Number(char.charCodeAt(0) - 96)
    }
}

//now taking the data and reducing it into the final number
const firstPuzzleSolution = commonItems.reduce((acc, curr) => acc + curr)



const groups = []

for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push(rucksacks.slice(i, i + 3).map(r => r.split('')))
}

const badges = groups.map(g => {
    return getCharPoints(g[0].filter(r => g[1].includes(r) && g[2].includes(r))[0])
})

const secondPuzzleSolution = badges.reduce((acc, curr) => acc + curr)




console.log(firstPuzzleSolution);
console.log(secondPuzzleSolution);
console.log(groups);






