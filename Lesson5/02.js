const fs = require('fs');

//write json file

const obj = {
    "course":"node.js 2024",
    "sprints":"12",
    "tasks":"165",
    "tags": ['fs','file','database']
}

// write to json file
fs.writeFileSync('./d_05/j_1.json', JSON.stringify(obj), {unicode: 'utf8', flag: 'w'});


// reade from json file
const data = fs.readFileSync('./d_05/j_1.json', {unicode: 'utf8'});
const dataObj = JSON.parse(data)

console.log(dataObj);

